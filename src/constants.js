import {
  skaermkortKlassiskStyle,
  skaermkortDaempetStyle,
  skaermkortGraaStyle,
  skaermkortMoerktStyle
} from './styles'

export const STYLE_FILES = [
  {
    title: 'Klassisk', // The title displayed in the styling selector
    img: 'klassisk', // The file name of the image to be diplayed in the styling selector
    style: skaermkortKlassiskStyle
  },
  {
    title: 'Dæmpet',
    img: 'daempet',
    style: skaermkortDaempetStyle
  },
  {
    title: 'Grå',
    img: 'graa',
    style: skaermkortGraaStyle
  },
  {
    title: 'Mørkt',
    img: 'moerkt',
    style: skaermkortMoerktStyle
  }
]
