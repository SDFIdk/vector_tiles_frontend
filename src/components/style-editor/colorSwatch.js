export class ColorSwatch extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="swatch-wrapper">
        <input id="${ this.dataset.label }" type="color" value="${ this.dataset.color }">
        <label for="${ this.dataset.label }">${ this.formatLabelName(this.dataset.label) }</label>
      </div>
    `
  }


  formatLabelName(id) {
    return id.split('_').join(' ')
  }
}