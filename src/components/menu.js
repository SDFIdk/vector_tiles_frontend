import logo from '@dataforsyningen/designsystem/assets/logo-medium.svg'
import stackIcon from '@dataforsyningen/designsystem/assets/icons/stack.svg'

import { MapLayerSelector } from './layerSelector'

customElements.define('layer-selector', MapLayerSelector)

export class MapMenu extends HTMLElement {

  layers = []
  bottomElement
  styles = /* css */`
    .map-menu-border {
      position: absolute;
      top: var(--gap);
      left: var(--gap-lg);
      max-width: calc(min(94vw, 50rem));
      max-height: 94vh;
      z-index: 2;
    }
    .map-menu {
      border-radius: 2rem;
      border: 2px solid var(--border-color);
      background-color: var(--background-color);
      max-height: 94vh;
      overflow: hidden;
    }
    .map-menu-top {
      padding: var(--space-sm);
      display: flex;
      gap: var(--space-sm);
      align-items: center;
    }
    .logo-title {
      width: 17rem;
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }
    .ds-logo {
      width: 45px;
      flex-shrink: 0;
    }
    button.secondary.selected {
      background-color: var(--primary);
      --ds-icon-color: var(--white);
    }
  `
  template = /* html */`
    <style>
      ${ this.styles }
    </style>
    <article class="map-menu">
      <section class="map-menu-top">
        <div class="logo-title">
          ${logo}
          <span>
            <strong>Vector Tiles - Skærmkort</strong>
            <small>Klimadatastyrelsen</small>
          <span>
        </div>
        <button title="Styles" class="secondary" id="layer-selector-button">
          ${stackIcon}
        </button>
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

  setLayers(layers) {
    this.layers = layers
    if (this.bottomElement && this.bottomElement.setLayers) this.bottomElement.setLayers(this.layers)
  }

  toggleTab(tabName) {
    const selectedClass = 'selected'
    const menuElement = this.querySelector('.map-menu')
    const menuTopElement = this.querySelector('.map-menu-top')
    const buttonElement = this.querySelector('#' + tabName + '-button')
    if (!menuElement || !menuTopElement || !buttonElement) return
    if (tabName.toUpperCase() === menuElement.lastChild.tagName) { // if the tab is already open, close it.
      menuElement.removeChild(menuElement.lastElementChild)
      buttonElement.classList.remove(selectedClass)
    } else {
      if (menuElement.childElementCount > 1) { // if another tab is open, close that.
        menuElement.removeChild(menuElement.lastElementChild)
        for (let i = 0; i < menuTopElement.children.length; i++) {
          menuTopElement.children[i].classList.remove(selectedClass)
        }
      }
      // Add the new tab
      this.bottomElement = document.createElement(tabName)
      menuElement.appendChild(this.bottomElement)
      this.bottomElement.setLayers && this.bottomElement.setLayers(this.layers)
      buttonElement.classList.add(selectedClass)
    }
  }
}