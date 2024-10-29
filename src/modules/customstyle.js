function loadData(key) {
  return JSON.parse(localStorage.getItem(key))
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function updateLocalStyleIndex(title) {
  let styleIndex = loadData('vt-style-index')
  if (!styleIndex) {
    styleIndex = []
  }
  const storageKey = `vt-style-${title}-${styleIndex.length}`
  styleIndex.push(storageKey)
  saveData('vt-style-index', styleIndex)
  return storageKey
}

export function loadStyles() {
  const styleIndex = loadData('vt-style-index')
  const styleArr = []
  styleIndex.forEach(storageKey => {
    styleArr.push({
      style: loadData(storageKey),
      title: storageKey
    })
  })
  return styleArr
}

export function saveStyle(title, style) {
  const storageKey = updateLocalStyleIndex(title)
  saveData(storageKey, style)
}