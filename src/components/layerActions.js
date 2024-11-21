import downloadIcon from '@dataforsyningen/designsystem/assets/icons/download.svg'
import deleteIcon from '@dataforsyningen/designsystem/assets/icons/trash.svg'

export class LayerActions extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      ${ this.dataset.removable ? this.renderDeleteAction() : ''}
    ` // Should include this.renderDownloadAction() in the future
    this.setupListeners()
  }

  renderDeleteAction() {
    return `
      <button class="quiet action-delete" title="Slet style">
        ${ deleteIcon }
      </button>
    `
  }

  renderDownloadAction() {
    return `
      <button class="quiet action-download" title="Download style">
        ${ downloadIcon }
      </button>
    `
  }

  setupListeners() {
    const deleteButton = this.querySelector('.action-delete')
    if (deleteButton) {
      deleteButton.addEventListener('click', (event) => {
        event.stopPropagation()
        if (confirm(`Vil du slette ${this.title}?`)) {
          this.dispatchEvent(new CustomEvent('vt:delete-style', {
            detail: this.title, bubbles: true, composed: true
          }))
        }
      })
    }

    /*
    const downloadButton = this.querySelector('.action-download')
    downloadButton.addEventListener('click', (event) => {
      event.stopPropagation()
      if (prompt('')) {
        this.downloadJSON(this.getJSON, `${ this.title }-stylefile.json`)
      }
    })
    */
  }

  getJSON(key) {
    return ''
  }

  downloadJSON(data, filename = 'stylefile.json') {
    const jsonString = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const link = document.createElement('a')
    link.download = filename
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}