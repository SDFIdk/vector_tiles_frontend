import { deleteStyle } from '../modules/customstyle.js'

export class StyleActions extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    if (this.dataset.removable === 'true') {
      this.innerHTML = `
        <button class="action-delete">Slet</button>
      `
      this.querySelector('.action-delete').addEventListener('click', (event) => {
        event.stopPropagation()
        deleteStyle(this.dataset.key)
        this.dispatchEvent(new CustomEvent('vt:delete-style', { 
          bubbles: true, composed: true
        }))
      })
    } else {
      this.innerHTML = ''
    }
  }
}