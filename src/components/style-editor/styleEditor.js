import { style } from './styleEditorTemplateStyle.js'
import { ColorSwatch } from './colorSwatch.js'

customElements.define('color-swatch', ColorSwatch)

export class StyleEditor extends HTMLElement {
  
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .style-editor {
          padding: var(--space);
        }
        .swatches {
          height: calc(100vh - 40rem);
          overflow: auto;
        }
      </style>
      <hr>
      <article class="style-editor">
        <h2>Vælg farver</h2>
        <div class="swatches">
        ${ this.renderSwatches() }
        </div>
      </article>
    `
    this.addEventListener('change', this.changeColorHandler.bind(this))
  }

  renderSwatches() {
    let markup = ''
    style.layers.forEach((layer) => {
      const color = layer.type === 'fill' ? layer.paint['fill-color'] : layer.paint['line-color']
      console.log(color)
      markup += `<color-swatch data-label="${ layer.id }" data-color="${ color }" ></color-swatch>`
    })
    return markup
  }

  changeColorHandler(event) {
    console.log(event.target.value)
    this.dispatchEvent(new CustomEvent('vt:change-style', { 
      detail: {style: style}, bubbles: true, composed: true
    }))
  }
}