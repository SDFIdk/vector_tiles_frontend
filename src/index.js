import Map from 'ol/Map'
import View from 'ol/View'
import MVT from 'ol/format/MVT'
import LayerGroup from 'ol/layer/Group'
import { get as getProjection } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import proj4 from 'proj4/dist/proj4'
import { apply } from 'ol-mapbox-style'

import { STYLE_FILES } from './constants'
import { MapMenu } from './components/menu'
import { saveStyle, loadStyles } from './modules/customstyle.js'

customElements.define('map-menu', MapMenu)

const format = new MVT()

// Create the projection
proj4.defs(config.PROJECTION_NAME, config.PROJECTION)
register(proj4)
const projection = getProjection(config.PROJECTION_NAME)
projection.setExtent(config.EXTENT)
const resolutions = config.RESOLUTIONS

// Custom setTileLoadFunction to add a header with a token
const tileLoadFunctionWithTokenHeader = (tile, src) => {
  tile.setLoader((ext, res, proj) => {
    const client = new XMLHttpRequest()
    client.open('GET', src)
    client.responseType = 'arraybuffer'
    if (config.API_TOKEN) client.setRequestHeader('token', config.API_TOKEN)
    client.onload = () => {
      try {
        const source = client.response
        tile.onLoad.bind(tile)(
          (
            format.readFeatures(source, {
              extent: ext,
              featureProjection: proj,
            })
          ),
          format.readProjection(source)
        )
      } catch {
        tile.onError.bind(tile)()
      }
    }
    client.onerror = () => {
      tile.onError.bind(tile)()
    }
    client.send()
  })
}

// Create the ol map
const map = new Map({
  layers: [],
  target: 'map',
  view: new View({
    extent: config.EXTENT,
    center: config.CENTER,
    zoom: config.ZOOM,
    projection,
    maxZoom: config.MAX_ZOOM
  })
})

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
  if (event.detail.stylefile) {
    createStylefile(event.detail.stylefile, event.detail.title).then(layerGroup => {
      map.addLayer(layerGroup)
      showLayer(layerGroup)
      // Save style to localStorage
      saveStyle(event.detail.title, event.detail.stylefile)
      document.getElementById('map-menu').setLayers(map.getLayers())
    })
  }
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
