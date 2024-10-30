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

export function saveStyle(style) {
  const title = prompt('Giv din style et navn')
  let styles = loadData(localStorageKey)
  if (!styles) {
    styles = {}
  }
  if (styles[title]) {
    alert('Der findes allerede en style med samme navn.')
    return
  }
  styles[title] = style
  saveData(localStorageKey, styles)
}

export function deleteStyle(title) {
  let styles = loadData(localStorageKey)
  delete styles[title]
  saveData(localStorageKey, styles)
}