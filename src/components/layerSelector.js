const selectedClass = 'selected'
const maxTitleLength = 11

export class MapLayerSelector extends HTMLElement {

  layers = []
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
      display: flex;
      flex-wrap: wrap;
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
      outline: 1px solid var(--bg3);
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
    .info {
      padding: 1rem;
      max-width: 20rem;
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
    const uploadElement = container.querySelector('.styles-upload')

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

    // Create an info element
    const infoElement = document.createElement('article')
    const infoText = document.createElement('p')
    infoElement.classList.add('info')
    infoText.innerHTML = 'Se dokumentation, stylefiles og kode eksempel på <a target="_blank" href="https://github.com/SDFIdk/vector_tiles_frontend">Github</a>.'
    infoElement.appendChild(infoText)
    uploadElement.appendChild(infoElement)
    
    this.appendChild(container)
    this.createLayerButtons()
  }


  // Create the buttons for switching styles
  createLayerButtons() {
    const stylesElement = this.querySelector('.styles-container')
    stylesElement.innerHTML = ''
    this.layers.forEach(layer => {
      const styleElement = this.createStyleElement(layer, stylesElement)
      if (layer.getVisible()) styleElement.classList.add(selectedClass)
      stylesElement.appendChild(styleElement)
    })
  }

  connectedCallback() {
    this.createDOM()
  }

  setLayers(layers) {
    this.layers = layers
    this.createLayerButtons()
  }

  handleDrop(event) {
    const fileList = event.dataTransfer.files
    if (fileList.length !== 1) return // only single files allowed
    const file = fileList[0]
    const fileName = file.name.slice(0, -5)
    const title = (fileName.length > maxTitleLength) ? fileName.slice(0, maxTitleLength-1) + '&hellip;' : fileName
    const fileType = file.type
    if (fileType !== 'application/json') return // only json files allowed
    const reader = new FileReader()
    reader.onload = (e) => {
      const jsonFile = JSON.parse(e.target.result)
      // Add new style element to the list
      this.dispatchEvent(new CustomEvent('vt:add-style', { 
        detail: { stylefile: jsonFile, title }, bubbles: true, composed: true 
      }))
    }
    reader.readAsText(file)
  }

  // Create a style element
  createStyleElement(layer, stylesElement) {
    const img = layer.get('img')
    const title = layer.get('title') || ''
    const wrapperElement = document.createElement('article')
    const titleElement = document.createElement('h6')
    const actionsElement = document.createElement('vt-actions')
    wrapperElement.classList.add('style')
    if (img) {
      const imgElement = document.createElement('img')
      imgElement.src = img
      wrapperElement.appendChild(imgElement)
    } else {
      const imgElement = document.createElement('section')
      const imgTextElement = document.createElement('p')
      actionsElement.dataset.removable = true
      imgTextElement.innerHTML = 'Brugerdefineret'
      imgElement.appendChild(imgTextElement)
      wrapperElement.classList.add('custom-style') // We assume styles with no image are all custom/local styles
      wrapperElement.appendChild(imgElement)
    }
    titleElement.innerHTML = title
    actionsElement.title = title
    wrapperElement.appendChild(titleElement)
    wrapperElement.appendChild(actionsElement)
    // Add the event listener to switch layer
    wrapperElement.addEventListener('click', () => {
      if ([...wrapperElement.classList].includes(selectedClass)) return
      for (let i = 0; i < stylesElement.children.length; i++) {
        stylesElement.children[i].classList.remove(selectedClass)
      }
      wrapperElement.classList.add(selectedClass)
      // Use timeout hack to allow highlight of selection to update before updating the map.
      // Otherwise it does not update until the new style has also rendered.
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('vt:change-style', { 
          detail: layer, bubbles: true, composed: true 
        }))
      }, 1)
    })
    return wrapperElement
  }

}