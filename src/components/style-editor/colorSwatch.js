export class ColorSwatch extends HTMLElement {

  componentId

  constructor() {
    super()
  }

  connectedCallback() {
    this.componentId = `swatch${ Math.floor(Math.random() * 100000) }`
    this.innerHTML = `
      <style>
        .swatch-wrapper {
          margin: 0.5rem 0;
        }
      </style>
      <div class="swatch-wrapper">
        <label for="${ this.componentId }">${ this.dataset.label }</label>
        <input id="${ this.componentId }" type="color" value="${ this.dataset.color }">
      </div>
    `
  }
}