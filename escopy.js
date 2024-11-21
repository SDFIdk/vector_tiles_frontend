import esbuild from 'esbuild'
import { copy } from 'esbuild-plugin-copy'

const outdir = 'public'

await esbuild.build({
  outdir: outdir,
  plugins: [
    copy({
      assets: [
        {
          from: ['./node_modules/@dataforsyningen/vector_tiles_assets/styles/**/*'],
          to: ['./styles']
        },
        {
          from: ['./node_modules/@dataforsyningen/vector_tiles_assets/glyphs/**/*'],
          to: ['./glyphs']
        }
      ]
    })
  ]
})
