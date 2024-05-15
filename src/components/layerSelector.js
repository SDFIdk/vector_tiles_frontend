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
      padding: 0.5rem 1rem;
    }
    .style {
      cursor: pointer;
    }
    .style > h6 {
      margin: 0.5rem 0 0 0;
    }
    .style > img {
      width: 8rem;
      min-width: 8rem;
      height: 5rem;
      border-radius: .5rem; 
      background-color: var(--bg1);
      object-fit: cover;
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
    
    STYLE_FILES.forEach(style => {
      const wrapperElement = document.createElement('section')
      const imgElement = document.createElement('img')
      const titleElement = document.createElement('h6')
      wrapperElement.classList.add('style')
      imgElement.src = 'img/' + style.title + '.png'
      titleElement.innerHTML = style.title
      wrapperElement.appendChild(imgElement)
      wrapperElement.appendChild(titleElement)
      wrapperElement.addEventListener('click', () => {
        console.log('emit event to switch style')
      })
      contentElement.appendChild(wrapperElement)
    })

    this.appendChild(container)
  }

  connectedCallback() {
    this.createDOM()
  }
}