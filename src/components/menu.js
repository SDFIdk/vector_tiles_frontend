import { DSLogo } from '@dataforsyningen/designsystem'
import stackIcon from '@dataforsyningen/designsystem/assets/icons/icon_stack.svg'

import { MapLayerSelector } from './layerSelector'

customElements.define('ds-logo', DSLogo)
customElements.define('layer-selector', MapLayerSelector)

export class MapMenu extends HTMLElement {

  styles = /* css */`
    .map-menu-border {
      position: absolute;
      top: 1.5rem;
      left: 5vw;
      max-width: calc(min(90vw, 50rem));
      max-height: calc(min(90vh, 50rem));
      border-radius: 2rem;
      background-color: rgba(62, 221, 198, 0.33);
      padding: .25rem;
      z-index: 2;
    }

    .map-menu {
      border-radius: 2rem;
      border: 1px solid var(--border-color);
      background-color: var(--background-color);
      max-height: calc(min(90vh, 50rem) - 0.5rem);
      overflow: hidden;
    }

    .map-menu-top {
      display: flex;
      padding: .5rem;
    }

    .ds-logo {
      width: 10rem;
    }

    .icon-wrapper {
      height: 3rem;
    }

    svg {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
  `
  template = /* html */`
    <style>
      ${ this.styles }
    </style>
    <article class="map-menu">
      <section class="map-menu-top">
        <p class="ds-logo small">
          <ds-logo></ds-logo>
          <strong>Vector Tiles</strong>
          <span>SDFI</span>
        </p>
        <article class="icon-wrapper" id="layer-selector-button">
          ${stackIcon}
        </article>
      </section>
    </article>
  `

  constructor() {
    super()
  }

  createDOM() {
    const container = document.createElement('section')
    container.className = 'map-menu-border'
    container.innerHTML = this.template
    this.append(container)
  }

  connectedCallback() {
    this.createDOM()
    this.querySelector('#layer-selector-button').addEventListener('click', () => {
      this.toggleTab('layer-selector')
    })
  }

  toggleTab(tabName) {
    const menuElement = this.querySelector('.map-menu')
    if (tabName.toUpperCase() === menuElement.lastChild.tagName) {
      menuElement.removeChild(menuElement.lastElementChild)
    } else {
      if (menuElement.childElementCount > 1) menuElement.removeChild(menuElement.lastElementChild)
      menuElement.appendChild(document.createElement(tabName))
    }
  }
}