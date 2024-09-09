import Map from 'ol/Map'
import View from 'ol/View'
import MVT from 'ol/format/MVT'
import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import { get as getProjection } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import proj4 from 'proj4/dist/proj4'
import { applyStyle, applyBackground } from 'ol-mapbox-style'

import { STYLE_FILES } from './constants'
import { MapMenu } from './components/menu'

customElements.define('map-menu', MapMenu)

const srs = 'EPSG:25832'
const extent = [120000, 5900000, 1000000, 6500000]
const center = [590000, 6205000]
const zoom = 7
const maxZoom = 15
const format = new MVT()

// Create the projection
proj4.defs(srs, '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs')
register(proj4)
const projection = getProjection('EPSG:25832')
projection.setExtent(extent)

// Create the vector Layer
const vectorLayer = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    tileSize: 256,
    format: format,
    crossOrigin: 'anonymous',
    projection: projection,
    url: config.API_VECTOR_TILES_BASEURL + '?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=skaermkort_vector_tiles&STYLE=&TILEMATRIX=EPSG:25832:{z}&TILEMATRIXSET=EPSG:25832&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
  })
})
const resolutions = vectorLayer.getSource().getTileGrid().getResolutions()

// Custom setTileLoadFunction to add a header with a token
vectorLayer.getSource().setTileLoadFunction((tile, src) => {
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
})

// Create the ol map
const map = new Map({
  layers: [vectorLayer],
  target: 'map',
  view: new View({
    extent,
    center,
    zoom,
    projection,
    maxZoom
  }),
})

// Add the default style
applyStyle(vectorLayer, STYLE_FILES[0].style, { resolutions, updateSource: false })
applyBackground(map, STYLE_FILES[0].style, { resolutions, updateSource: false })

// Update the style when it's changed in the menu
document.addEventListener('vt:change-style', event => {
  if (event.detail.style) {
    applyStyle(vectorLayer, event.detail.style, { resolutions, updateSource: false })
    applyBackground(map, event.detail.style, { resolutions, updateSource: false })
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
