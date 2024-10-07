/*
 * THESE CONFIGURATIONS WILL BE MADE PUBLIC!
 *
 * These variables will be available in a Javascript for everyone to see.
 * NO SECRET PASSWORDS HERE, PLEASE
 */

const config = {
  // API TOKEN can be aquired from https://dataforsyningen.dk/
  // When using the internal servers directly, the token can be set to an empty string to avoid adding the header.
  API_TOKEN: '[ INSERT TOKEN ]',
  API_VECTOR_TILES_BASEURL: 'https://api.dataforsyningen.dk/rest/skaermkort_vector_tiles/v1.0',
  PROJECTION_NAME: 'EPSG:25832',
  PROJECTION: '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs',
  EXTENT: [120000, 5900000, 1000000, 6500000],
  CENTER: [590000, 6205000],
  ZOOM: 7,
  MAX_ZOOM: 15
}