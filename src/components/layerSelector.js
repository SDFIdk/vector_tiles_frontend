export class MapLayerSelector extends HTMLElement {

  styles = /* css */`
    .map-menu-bottom {
      padding: 0.5rem
    }
  `
  template = /* html */`
    <style>
      ${ this.styles }
    </style>
    <article>
      hihi
    </article>
  `

  constructor() {
    super()
  }

  createDOM() {
    const container = document.createElement('section')
    container.className = 'map-menu-bottom'
    container.innerHTML = this.template
    this.append(container)
  }

  connectedCallback() {
    this.createDOM()
  }
}