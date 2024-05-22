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
    projection: projection
  })
})

// Custom setTileLoadFunction to add a header with a token
vectorLayer.getSource().setTileLoadFunction((tile, src) => {
  tile.setLoader((ext, res, proj) => {
    const client = new XMLHttpRequest()
    client.open('GET', src)
    client.responseType = 'arraybuffer'
    client.setRequestHeader('token', config.API_TOKEN)
    client.onload = () => {
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
    projection: projection,
  }),
})

// Add the default style
applyStyle(vectorLayer, STYLE_FILES[0].style)
applyBackground(map, STYLE_FILES[0].style)

// Update the style when it's changed in the menu
document.addEventListener('vt:change-style', event => {
  if (event.detail.style) {
    applyStyle(vectorLayer, event.detail.style)
    applyBackground(map, event.detail.style)
  }
})