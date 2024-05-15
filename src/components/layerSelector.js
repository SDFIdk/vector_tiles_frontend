import { STYLE_FILES } from '../constants'

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
    .content {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 1rem;
    }
    .style {
      cursor: pointer;
    }
    .style > h6 {
      margin: 0.5rem 0 0 0;
    }
    .style.selected > h6 {
      color: var(--aktion)
    }
    .style > img {
      width: 8rem;
      min-width: 8rem;
      height: 5rem;
      border-radius: .5rem; 
      background-color: var(--bg1);
      object-fit: cover;
    }
    .style.selected > img {
      outline: 4px solid var(--aktion);
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
    </article>
  `

  constructor() {
    super()
  }

  createDOM() {
    const container = document.createElement('section')
    container.className = 'map-menu-bottom'
    container.innerHTML = this.template
    const contentElement = container.querySelector('.content')
    const selectedClass = 'selected'
    
    STYLE_FILES.forEach((style, index) => {
      const wrapperElement = document.createElement('section')
      const imgElement = document.createElement('img')
      const titleElement = document.createElement('h6')
      wrapperElement.classList.add('style')
      if (!index) wrapperElement.classList.add(selectedClass)
      imgElement.src = 'img/' + style.title + '.png'
      titleElement.innerHTML = style.title
      wrapperElement.appendChild(imgElement)
      wrapperElement.appendChild(titleElement)
      wrapperElement.addEventListener('click', () => {
        if ([...wrapperElement.classList].includes(selectedClass)) return
        this.dispatchEvent(new CustomEvent('vt:change-style', { 
          detail: style, bubbles: true, composed: true 
        }))
        for (let i = 0; i < contentElement.children.length; i++) {
          contentElement.children[i].classList.remove(selectedClass)
        }
        wrapperElement.classList.add(selectedClass)
      })
      contentElement.appendChild(wrapperElement)
    })

    this.appendChild(container)
  }

  connectedCallback() {
    this.createDOM()
  }
}