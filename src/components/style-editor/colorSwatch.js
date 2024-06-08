export class ColorSwatch extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .swatch-wrapper {
          margin: 0.5rem 0;
        }
      </style>
      <div class="swatch-wrapper">
        <label for="${ this.dataset.label }">${ this.dataset.label }</label>
        <input id="${ this.dataset.label }" type="color" value="${ this.dataset.color }">
      </div>
    `
  }
}