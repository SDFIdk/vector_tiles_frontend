import { Map, NavigationControl } from 'maplibre-gl'

import { STYLE_FILES } from '../constants'
import { MapMenu } from '../components/menu'
import { LayerActions } from '../components/layerActions.js'
import { saveStyle, loadStyles, deleteStyle } from '../modules/customstyle.js'

customElements.define('map-menu', MapMenu)
customElements.define('vt-actions', LayerActions)

const styles = [...STYLE_FILES ,...loadStyles()]
styles.forEach(style => {
  style.id = Math.random().toString(36).substring(2, 12)
})
let shownStyle = styles[0]

// Custom transformRequest to add a header with a token
const transformRequest = (url, resourceType) => {
  return {
    url: url,
    headers: { 'token': config.API_TOKEN }
  }
}

// Create the ml map
const map = new Map({
  container: 'map',
  minZoom: 0,
  maxZoom: 24,
  style: 'http://localhost:8000/styles/official/skaermkort_klassisk_maplibre_test_font.json',
  maxBounds: [
    [ 3.3201605, 53.1136553 ],
    [ 17.5577711, 58.3539706 ]
  ],
  center: [ 10.129395, 56.127184 ],
  zoom: 11,
  attributionControl: false,
  transformRequest
})

document.getElementById('map-menu').setLayers(styles)

const showStyle = (style) => {
  shownStyle = style
  map.setStyle(style.style)
}

const setLayers = () => {
  const layers = styles.map(style => {
    return {
      title: style.title,
      img: style.img,
      visible: style === selected[0]
    }
  })
  document.getElementById('map-menu').setLayers(layers)
}

// Update the style when it's changed in the menu
document.addEventListener('vt:change-style', event => {
  const title = event.detail.title
  if (!title) return
  const style = styles.find(s => {
    return s.title === title
  })
  if (!style) return
  showStyle(style)
})

// Add a new stylefile on upload
document.addEventListener('vt:add-style', event => {
  const stylefile = event.detail.stylefile
  const title = event.detail.title
  if (!stylefile || !title) return
  const style = {
    title,
    style: stylefile,
    id: Math.random().toString(36).substring(2, 12)
  }
  styles.push(style)
  showStyle(style)
  setLayers()
  // Save style to localStorage
  const saveSuccess = saveStyle(title, stylefile)
  if (!saveSuccess) {
    return
  }
})

// Remove a style
document.addEventListener('vt:delete-style', event => {
  const title = event.detail
  if (!title) return
  deleteStyle(title)
  const style = styles.find(s => {
    return s.title === title
  })
  if (style) {
    const index = styles.indexOf(style)
    styles.splice(index, 1)
    if (selected === style) showStyle(styles[0])
  }
  setLayers()
})

// Show zoom level
const showZoom = (zoom) => {
  const zoomtext = "Zoomlevel: " + Math.round(currZoom * 100) / 100
  document.getElementById("zoom-level").innerHTML = zoomtext
}
let currZoom = map.getZoom()
showZoom(currZoom)
map.on('moveend', function(e) {
    const newZoom = map.getZoom()
    if (currZoom !== newZoom) {
      currZoom = newZoom
      showZoom(newZoom)
    }
})
