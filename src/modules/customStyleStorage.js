export class CustomStyleStorage {
  #localStorageKey

  constructor(name) {
    this.#localStorageKey = 'vt-styles-' + name
  }

  #loadData(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  #saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  loadStyles() {
    const styleArr = []
    const styles = this.#loadData(this.#localStorageKey)
    if (!styles) {
      return []
    }
    for (const [key, value] of Object.entries(styles)) {
      styleArr.push({
        style: value,
        title: key,
        localStyle: true
      })
    }
    return styleArr
  }

  saveStyle(title, style) {
    let styles = this.#loadData(this.#localStorageKey)
    if (!styles) {
      styles = {}
    }
    if (styles[title]) {
      alert('Der findes allerede en style med samme navn.')
      return false
    }
    styles[title] = style
    this.#saveData(this.#localStorageKey, styles)
    return true
  }

  deleteStyle(title) {
    let styles = this.#loadData(this.#localStorageKey)
    delete styles[title]
    this.#saveData(this.#localStorageKey, styles)
  }
}