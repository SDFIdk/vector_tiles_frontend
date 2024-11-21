import klassisk from './assets/img/klassisk.png'
import daempet from './assets/img/daempet.png'
import graa from './assets/img/graa.png'
import moerkt from './assets/img/moerkt.png'

export const STYLE_FILES_OL = [
  {
    title: 'Klassisk', // The title displayed in the styling selector.
    img: klassisk, // Image to be diplayed in the styling selector.
    style: '/styles/official/skaermkort_klassisk.json' // File location of the style file.
  },
  {
    title: 'Dæmpet',
    img: daempet,
    style: '/styles/official/skaermkort_daempet.json'
  },
  {
    title: 'Grå',
    img: graa,
    style: '/styles/official/skaermkort_graa.json'
  },
  {
    title: 'Mørkt',
    img: moerkt,
    style: '/styles/official/skaermkort_moerkt.json'
  }
]

export const STYLE_FILES_ML = [
  {
    title: 'Klassisk',
    img: klassisk,
    style: '/styles/official/3857_skaermkort_klassisk.json'
  },
  {
    title: 'Dæmpet',
    img: daempet,
    style: '/styles/official/3857_skaermkort_daempet.json'
  },
  {
    title: 'Grå',
    img: graa,
    style: '/styles/official/3857_skaermkort_graa.json'
  },
  {
    title: 'Mørkt',
    img: moerkt,
    style: '/styles/official/3857_skaermkort_moerkt.json'
  }
]
