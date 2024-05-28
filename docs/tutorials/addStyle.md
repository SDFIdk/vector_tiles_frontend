# Adding a new style to the website

- Add the `.json` stylefile to `public/styles`
- Add the image file for displaying a preview of the style to `public/img`
- In `src/constants.js` add a configuration object to the `STYLE_FILES` array. For instance:
```
  {
    title: 'Klassisk', // The title displayed in the styling selector
    img: 'img/klassisk.png', // File location of the image to be diplayed in the styling selector
    style: 'styles/klassisk.json' // File location of the stylefile
  }
```
