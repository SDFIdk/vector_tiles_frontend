import { STYLE_FILES } from '../constants'

const selectedClass = 'selected'
const maxTitleLength = 11

export class MapLayerSelector extends HTMLElement {

  styles = /* css */`
    .header {
      width: 100%;
      background-color: var(--bg1);
      padding: 0.5rem 1rem;
    }
    .header > h5 {
      margin: 0;
    }
    .content{
      overflow-x: auto;
      max-height: calc(100vh - 12rem);
    }
    .styles-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 1rem;
    }
    .styles-upload {
      padding: 0 1rem 1rem 1rem;
    }
    .style {
      cursor: pointer;
    }
    .style > h6 {
      margin: 0.5rem 0 0 0;
    }
    .style.selected > h6 {
      color: var(--aktion);
    }
    .style > img, .style > section {
      width: 8rem;
      min-width: 8rem;
      height: 5rem;
      border-radius: .5rem;
      background-color: var(--bg1);
      object-fit: cover;
    }
    .style > section, .drop-zone {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .style.selected > img, .style.selected > section {
      outline: 4px solid var(--aktion);
    }
    .drop-zone {
      width: 13rem;
      height: 8rem;
      padding: 1rem;
      border-radius: .5rem;
      background-color: var(--bg1);
    }
    .drop-zone[drop-active=true] {
      outline: dotted var(--aktion);
    }
  `
  template = /* html */`
    <style>
      ${ this.styles }
    </style>
    <article class="header">
      <h5>Vælg styling</h5>
    </article>
    <article class="content">
      <section class="styles-container">
      </section>
      <section class="styles-upload">
      </section>
    </article>
  `

  constructor() {
    super()
  }

  createDOM() {
    const container = document.createElement('section')
    container.className = 'map-menu-bottom'
    container.innerHTML = this.template
    const stylesElement = container.querySelector('.styles-container')
    const uploadElement = container.querySelector('.styles-upload')
    
    // Create the buttons for switching styles
    STYLE_FILES.forEach((style, index) => {
      const styleElement = this.createStyleElement(style, style.img, stylesElement)
      if (!index) styleElement.classList.add(selectedClass)
      stylesElement.appendChild(styleElement)
    })

    // Create a drop zone for uploading your own styles
    const dropElement = document.createElement('article')
    const dropText = document.createElement('p')
    dropElement.classList.add('drop-zone')
    dropElement.addEventListener('drop', event => {
      event.preventDefault()
      dropElement.removeAttribute('drop-active')
      this.handleDrop(event)
    })
    dropElement.addEventListener('dragover', event => {
      event.preventDefault()
      dropElement.setAttribute('drop-active', true)
    })
    dropElement.addEventListener('dragleave', event => {
      event.preventDefault()
      dropElement.removeAttribute('drop-active')
    })
    dropText.innerHTML = 'Træk og slip din egen style fil her for at tilføje den til kortet.'
    dropElement.appendChild(dropText)
    uploadElement.appendChild(dropElement)
    
    this.appendChild(container)
  }

  connectedCallback() {
    this.createDOM()
  }

  handleDrop(event) {
    const stylesElement = this.querySelector('.styles-container')
    const fileList = event.dataTransfer.files
      if (fileList.length !== 1) return // only single files allowed
      const file = fileList[0]
      const fileName = file.name.slice(0, -5)
      const fileType = file.type
      if (fileType !== 'application/json') return // only json files allowed
      const reader = new FileReader()
      reader.onload = (e) => {
        const jsonFile = JSON.parse(e.target.result)
        // Add new style element to the list
        const styleElement = this.createStyleElement({
          id: Math.random().toString(16).slice(2),
          title: (fileName.length > maxTitleLength) ? fileName.slice(0, maxTitleLength-1) + '&hellip;' : str,
          style: jsonFile
        }, '', stylesElement)
        stylesElement.appendChild(styleElement)
        styleElement.click()
      }
      reader.readAsText(file)
  }

  // Create a style element
  createStyleElement(style, img, stylesElement) {
    const wrapperElement = document.createElement('article')
    const titleElement = document.createElement('h6')
    wrapperElement.classList.add('style')
    if (img) {
      const imgElement = document.createElement('img')
      imgElement.src = img
      wrapperElement.appendChild(imgElement)
    } else {
      const imgElement = document.createElement('section')
      const imgTextElement = document.createElement('p')
      imgTextElement.innerHTML = 'Bruger defineret'
      imgElement.appendChild(imgTextElement)
      wrapperElement.appendChild(imgElement)
    }
    titleElement.innerHTML = style.title
    wrapperElement.appendChild(titleElement)
    // Add the event listener to switch style
    wrapperElement.addEventListener('click', () => {
      if ([...wrapperElement.classList].includes(selectedClass)) return
      for (let i = 0; i < stylesElement.children.length; i++) {
        stylesElement.children[i].classList.remove(selectedClass)
      }
      wrapperElement.classList.add(selectedClass)
      this.dispatchEvent(new CustomEvent('vt:change-style', { 
        detail: style,
        bubbles: true,
        composed: true
      }))
    })
    return wrapperElement
  }

}