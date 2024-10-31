const localStorageKey = 'vt-styles'

function loadData(key) {
  return JSON.parse(localStorage.getItem(key))
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function loadStyles() {
  const styleArr = []
  const styles = loadData(localStorageKey)
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

export function saveStyle(title, style) {
  let styles = loadData(localStorageKey)
  if (!styles) {
    styles = {}
  }
  if (styles[title]) {
    alert('Der findes allerede en style med samme navn.')
    return false
  }
  styles[title] = style
  saveData(localStorageKey, styles)
  return true
}

export function deleteStyle(title) {
  let styles = loadData(localStorageKey)
  delete styles[title]
  saveData(localStorageKey, styles)
}