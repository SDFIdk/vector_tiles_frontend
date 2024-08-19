import { style } from './styleEditorTemplateStyle.js'
import { ColorSwatch } from './colorSwatch.js'

customElements.define('color-swatch', ColorSwatch)

export class StyleEditor extends HTMLElement {

  style
  styles = /* css */`
    .style-editor {
      padding: var(--space);
      border-top: 1px solid var(--border-color)
    }
    .swatches {
      height: calc(100vh - 35rem);
      overflow: auto;
    }
    .swatch-wrapper {
      margin: 0.5rem 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: var(--space);
    }
    .swatch-wrapper label::first-letter {
      text-transform: capitalize;
    }
    .swatch-wrapper input {
      padding: 0;
      border-radius: var(--space-sm);
      overflow: hidden;
    }
  `
  
  constructor() {
    super()
    this.style = style
  }

  connectedCallback() {
    this.innerHTML = /* html */`
      <style>
        ${ this.styles }
      </style>
      <article class="style-editor">
        <h3>Vælg farver</h3>
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