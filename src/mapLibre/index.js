import { Map, NavigationControl } from 'maplibre-gl'

import { STYLE_FILES } from '../constants'
import { MapMenu } from '../components/menu'
import { LayerActions } from '../components/layerActions.js'
import { saveStyle, loadStyles, deleteStyle } from '../modules/customstyle.js'

customElements.define('map-menu', MapMenu)
customElements.define('vt-actions', LayerActions)

const resolutions = config.RESOLUTIONS

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

map.dragRotate.disable() // Disable map rotation using right click + drag.
map.touchZoomRotate.disableRotation() // Disable map rotation using touch rotation gesture.

/*
const createStylefile = (stylefile, title, img) => {
  return new Promise((resolve, reject) => {
    const vectorLayerGroup = new LayerGroup()
    vectorLayerGroup.set('img', img)
    vectorLayerGroup.set('title', title)
    apply(vectorLayerGroup, stylefile, { resolutions, projection: config.PROJECTION_NAME })
    .then((layerGroup) => {
      layerGroup.getLayers().forEach(layer => {
        const url = layer?.getSource()?.urls ? layer.getSource().urls[0] : ''
        if (url?.includes('api.dataforsyningen.dk')) {
          layer.getSource().setTileLoadFunction(tileLoadFunctionWithTokenHeader)
        }
      })
      layerGroup.setVisible(false)
      resolve(vectorLayerGroup)
    }).catch((e) => {
      reject(e)
    })
  })
}

// Add the default styles
const stylePromises = []
STYLE_FILES.forEach(style => {
  stylePromises.push(createStylefile(style.style, style.title, style.img))
})
// And the styles stored in local storage
const storedStyles = loadStyles()
storedStyles.forEach(style => {
  stylePromises.push(createStylefile(style.style, style.title))
})
Promise.all(stylePromises).then((layerGroups) => {
  layerGroups.forEach((lg, index) => {
    if (index === 0) lg.setVisible(true)
    map.addLayer(lg)
  })
  document.getElementById('map-menu').setLayers(map.getLayers())
})

const showLayer = (layer) => {
  map.getLayers().forEach(layer => {
    layer.setVisible(false)
  })
  layer.setVisible && layer.setVisible(true)
}

// Update the style when it's changed in the menu
document.addEventListener('vt:change-style', event => {
  showLayer(event.detail)
})

// Add a new stylefile on upload
document.addEventListener('vt:add-style', event => {
  const stylefile = event.detail.stylefile
  const title = event.detail.title
  if (!stylefile || !title) return
  createStylefile(stylefile, title).then(layerGroup => {
    map.addLayer(layerGroup)
    showLayer(layerGroup)
    document.getElementById('map-menu').setLayers(map.getLayers())
    // Save style to localStorage
    const saveSuccess = saveStyle(title, stylefile)
    if (!saveSuccess) {
      return
    }
  })
})

// Remove a style
document.addEventListener('vt:delete-style', event => {
  const title = event.detail
  if (!title) return
  deleteStyle(title)
  const layerGroup = map.getLayers().getArray().find(lg => {
    return lg.get('title') === title
  })
  if (layerGroup) {
    if (layerGroup.getVisible()) showLayer(map.getLayers().getArray()[0])
    map.removeLayer(layerGroup)
  }
  document.getElementById('map-menu').setLayers(map.getLayers())
})

// Show zoom level
const showZoom = (zoom) => {
  const zoomtext = "Zoomlevel: " + Math.round(currZoom * 100) / 100
  document.getElementById("zoom-level").innerHTML = zoomtext
}
let currZoom = map.getView().getZoom()
showZoom(currZoom)
map.on('moveend', function(e) {
    const newZoom = map.getView().getZoom()
    if (currZoom !== newZoom) {
      currZoom = newZoom
      showZoom(newZoom)
    }
})
*/