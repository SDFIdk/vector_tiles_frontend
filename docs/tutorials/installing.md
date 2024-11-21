# Installing and building mapviewer locally (Linux)

To install and build `vector_tiles_frontend` locally, run these commands:

1. `git clone https://github.com/SDFIdk/vector_tiles_frontend`
2. `cd vector_tiles_frontend`
3. `npm install`

## Configuration (config.js)
Vector tiles expects to find a `config.js` file in the root folder when hosted. 
You'll need to supply your own token for your particular configuration.
You can copy and edit `config.example.js` to use as your own `config.js`.

## Build for development
Run `npm run import-assets` to copy the assets from vector_tiles_assets into your `/public` folder. You only need to do this once after running `npm install`.
Run `npm run dev` to start a development server running locally at `localhost:8000`

## Build for production
Run `npm run build` to make a production build. The build files are created in the `/public` folder ready to be hosted.
