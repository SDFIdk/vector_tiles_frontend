# Vector Tiles Frontend

`vector_tiles_frontend` is an application for displaying vector styles with custom styles.

- [Instructions for installation](https://github.com/SDFIdk/vector_tiles_frontend/blob/main/docs/tutorials/installing.md)

## Adding a new style

- Add the `.json` stylefile to `public/styles`
- Add the image file for displaying a preview of the style to `public/img`
- In `src/constants.js` add a configuration object to the `STYLE_FILES` array. For instance:
```
  {
    title: 'Klassisk', // The title displayed in the styling selector
    img: 'img/klassisk.png', // File location of the image to be diplayed in the styling selector
    style: 'styles/klassisk.json', // File location of the style file
    id: 'b515c702380a' // A unique ID. Can be basically any truthy string. This one was generated using Math.random().toString(16).slice(2)
  }
```