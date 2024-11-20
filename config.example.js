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
  PROJECTION_NAME: 'EPSG:25832',
  PROJECTION: '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs',
  EXTENT: [139000, 5661139.2, 977860.8, 6500000],
  CENTER: [566100, 6217900],
  RESOLUTIONS: [3276.8, 1638.4, 819.2, 409.6, 204.8, 102.4, 51.2, 25.6, 12.8, 6.4, 3.2, 1.6, 0.8, 0.4, 0.2, 0.1],
  ZOOM: 7,
  MAX_ZOOM: 15
}