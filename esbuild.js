import esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

const entry_points = {
  main: 'src/index.js',
  style: 'src/index.css'
}

if (process.env.NODE_ENV === 'production') {
  // Production build
  esbuild.build({
    entryPoints: entry_points,
    outdir: 'dist',
    bundle: true,
    minify: true,
    metafile: true,
    splitting: true,
    format: 'esm',
    loader: {
      '.ttf': 'file',
      '.svg': 'text'
    },
    plugins: [
      sassPlugin()
    ]
  })
  .then((result) => {
    esbuild.analyzeMetafile(result.metafile).then((analysis) => {
      console.log(analysis)
      console.log('Build finished 👍')
    })
  })
  .catch(() => process.exit(1))

} else {
  // Development mode watches for file changes and rebuilds
  esbuild.context({
    entryPoints: entry_points,
    outdir: 'public',
    bundle: true,
    splitting: true,
    format: 'esm',
    loader: {
      '.ttf': 'file',
      '.svg': 'text'
    },
    plugins: [
      sassPlugin()
    ]
  })
  .then((result) => {
    result.serve({
      servedir: 'public',
    }).then(({ host, port }) => {
      console.log('Serving at localhost:' + port)
    })
  })
  
}
