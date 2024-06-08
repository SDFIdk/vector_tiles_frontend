import { style } from './styleEditorTemplateStyle.js'
import { ColorSwatch } from './colorSwatch.js'

customElements.define('color-swatch', ColorSwatch)

export class StyleEditor extends HTMLElement {

  style
  
  constructor() {
    super()
    this.style = style
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
    this.style.layers.forEach((layer) => {
      const color = layer.type === 'fill' ? layer.paint['fill-color'] : layer.paint['line-color']
      markup += `<color-swatch data-label="${ layer.id }" data-color="${ color }" ></color-swatch>`
    })
    return markup
  }

  changeColorHandler(event) {
    
    // Identify changed layer
    const layerIndex = this.style.layers.findIndex((layer) => layer.id === event.target.id)

    // Modify style color for the target ID
    const layerType = this.style.layers[layerIndex].type
    this.style.layers[layerIndex].paint[`${ layerType }-color`] = event.target.value

    // Dispatch style JSON in event
    this.dispatchEvent(new CustomEvent('vt:change-style', { 
      detail: {style: JSON.stringify(this.style)}, bubbles: true, composed: true
    }))
  }
}