import Map from 'ol/Map'
import View from 'ol/View'
import MVT from 'ol/format/MVT'
import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import { get as getProjection } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import proj4 from 'proj4/dist/proj4'
import { applyStyle, stylefunction } from 'ol-mapbox-style'

import { STYLE_FILES } from './constants'
import { MapMenu } from './components/menu'

customElements.define('map-menu', MapMenu)

const layergroup = 'skaermkort_vector_tiles'
const srs = 'EPSG:25832'
const extent = [120000, 5900000, 1000000, 6500000]
const center = [590000, 6205000]
const zoom = 7

proj4.defs(srs, '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs')
register(proj4)
const projection = getProjection('EPSG:25832')
projection.setExtent(extent)

const vectorLayer = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    tileSize: 256,
    format: new MVT(),
    crossOrigin: 'anonymous',
    projection: projection,
    url: config.API_VECTOR_TILES_BASEURL
      + '?REQUEST=GetTile&LAYER=' + layergroup
      + '&TILEMATRIX=' + srs + ':{z}&TILEMATRIXSET=' + srs
      + '&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}&token=' + config.API_TOKEN
  })
})

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

applyStyle(vectorLayer, STYLE_FILES[0].style)

/* Use style file without using the source in it.
  Since we probably don't want to include the token in the stylefile.
const layerIds = []
STYLE_FILES[0].style.layers.forEach(layer => {
  layerIds.push(layer.id)
})
stylefunction(vectorLayer, STYLE_FILES[0].style, layerIds)
*/

document.addEventListener('vt:change-style', event => {
  if (event.detail.style) applyStyle(vectorLayer, event.detail.style)
})