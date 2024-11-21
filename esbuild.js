import esbuild from 'esbuild'
import { copy } from 'esbuild-plugin-copy'

const outdir = 'public'
const entryPoints = {
  index: 'src/index.html',
  main: 'src/index.js',
  style: 'src/index.css',
  'mapLibre/main': 'src/mapLibre/index.js'
}
const entryPointsML = {
  'mapLibre/index': 'src/index.html'
}
const loader = {
  '.html': 'copy',
  '.ttf': 'file',
  '.svg': 'text',
  '.png': 'file'
}

if (process.env.NODE_ENV === 'production') {
  // Production build
  Promise.all([
    esbuild.build({
      entryPoints: entryPoints,
      outdir: outdir,
      bundle: true,
      minify: true,
      metafile: true,
      splitting: true,
      format: 'esm',
      loader: loader
    }),
    esbuild.build({
      entryPoints: entryPointsML,
      outdir: outdir,
      loader: loader
    })
  ])
  .then((results) => {
    esbuild.analyzeMetafile(results[0].metafile).then((analysis) => {
      console.log(analysis)
      console.log('Build finished 👍')
    })
  })
  .catch(() => process.exit(1))

} else {
  // Development mode watches for file changes and rebuilds
  Promise.all([
    esbuild.context({
      entryPoints: entryPoints,
      outdir: outdir,
      bundle: true,
      splitting: true,
      format: 'esm',
      loader: loader,
      plugins: [
        copy({
          assets: [
            {
              from: ['./config.js'],
              to: ['./config.js']
            }
          ]
        })
      ]
    }),
    esbuild.context({
      entryPoints: entryPointsML,
      outdir: outdir,
      loader: loader
    }),
  ])
  .then((results) => {
    results.forEach((res, index) => {
      if (!index) {
        res.serve({
          servedir: outdir,
        }).then(({ host, port }) => {
          console.log('Serving at localhost:' + port)
        })
      } else {
        res.watch()
      }
    })
  })
}
