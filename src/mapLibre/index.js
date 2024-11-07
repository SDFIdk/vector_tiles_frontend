import { Map } from 'maplibre-gl'

import { STYLE_FILES_ML } from '../constants'
import { MapMenu } from '../components/menu'
import { LayerActions } from '../components/layerActions.js'
import { CustomStyleStorage } from '../modules/customStyleStorage.js'

customElements.define('map-menu', MapMenu)
customElements.define('vt-actions', LayerActions)

const styleStorage = new CustomStyleStorage('ml')

const styles = [...STYLE_FILES_ML ,...styleStorage.loadStyles()]
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

const showStyle = (style) => {
  shownStyle = style
  map.setStyle(style.style)
}

const setLayers = () => {
  const layers = styles.map(style => {
    return {
      title: style.title,
      img: style.img,
      visible: style === shownStyle
    }
  })
  document.getElementById('map-menu').setLayers(layers)
}

// Create the ml map
const map = new Map({
  container: 'map',
  minZoom: 0,
  maxZoom: 24,
  style: shownStyle.style,
  maxBounds: [
    [ 3.3201605, 53.1136553 ],
    [ 17.5577711, 58.3539706 ]
  ],
  center: [ 10.129395, 56.127184 ],
  zoom: 11,
  attributionControl: false,
  transformRequest
})

setLayers()

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
  // Save style to localStorage
  const saveSuccess = styleStorage.saveStyle(title, stylefile)
  if (!saveSuccess) {
    return
  }
  styles.push(style)
  showStyle(style)
  setLayers()
})

// Remove a style
document.addEventListener('vt:delete-style', event => {
  const title = event.detail
  if (!title) return
  styleStorage.deleteStyle(title)
  const style = styles.find(s => {
    return s.title === title
  })
  if (style) {
    const index = styles.indexOf(style)
    styles.splice(index, 1)
    if (shownStyle === style) showStyle(styles[0])
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
