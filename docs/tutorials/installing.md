# Installing and building mapviewer locally

To install and build `vector_tiles_frontend` locally, run these commands:

1. `git clone https://github.com/SDFIdk/vector_tiles_frontend`
2. `cd vector_tiles_frontend`
3. `npm install`

## Configuration (config.js)
Vector tiles expects to find a `config.js` file in the root folder when hosted.

The contents of `config.js` should be a single Javascript object defined like so:
```
const config = {
  // API TOKEN can be aquired from https://dataforsyningen.dk/
  API_TOKEN: '[ INSERT TOKEN ]',
  API_VECTOR_TILES_BASEURL: 'https://api.dataforsyningen.dk/wmts/skaermkort_vector_tiles_labs/v1',
}
```
You'll need to supply your own tokens for your particular configuration.
You can copy and edit `config.js.example` to use as your own `config.js`.

## Build for development
Run `npm run dev` to start a development server running locally at `localhost:8000`

## Build for production
Run `npm run build` to make a production build. The built resources are saved in `dist/` folder; ready to be hosted along with the static assets in the `public` folder.
