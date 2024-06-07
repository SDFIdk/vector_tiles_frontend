export const style = {
  "version": 8,
  "name": "name",
  "glyphs": "{fontstack}{range}",
  "sources": {
      "vector-source": {
          "type": "vector",
          "tiles": ["https://api.dataforsyningen.dk/wmts/skaermkort_vector_tiles_labs/v1?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=skaermkort_vector_tiles&STYLE=&TILEMATRIX=EPSG:25832:{z}&TILEMATRIXSET=EPSG:25832&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"],
          "maxZoom": 20,
          "minZoom": 0
      }
  },
  "layers": [
      {
          "id": "vand_hav",
          "source-layer": "vand",
          "type": "fill",
          "filter": ["all", ["==", "type", "hav"]],
          "paint": {
              "fill-color": "#D4E6F0"
          },
          "source": "vector-source"
      },
      {
          "id": "natur_udland",
          "source-layer": "natur",
          "type": "fill",
          "filter": ["all", ["==", "type", "udland"]],
          "paint": {
              "fill-color": "#ffffff"
          },
          "source": "vector-source"
      },
      {
          "id": "natur_land",
          "source-layer": "natur",
          "type": "fill",
          "filter": ["all", ["==", "type", "land"]],
          "paint": {
              "fill-color": "#ffffff"
          },
          "source": "vector-source"
      },
      {
          "id": "bebygget_by",
          "source-layer": "bebygget",
          "minzoom": 7,
          "maxzoom": 13,
          "type": "fill",
          "filter": ["all", ["==", "type", "by"]],
          "layout": {"visibility": "visible"},
          "paint": {
              "fill-color": "#EBEDE6"
          },
          "source": "vector-source"
      },
      {
          "id": "bebygget_bykerne",
          "source-layer": "bebygget",
          "minzoom": 13,
          "type": "fill",
          "filter": ["all", ["==", "type", "bykerne"]],
          "paint": {
              "fill-color": "#EBEDE6"
          },
          "source": "vector-source"
      },
      {
          "id": "bebygget_højbebyggelse",
          "source-layer": "bebygget",
          "minzoom": 13,
          "type": "fill",
          "filter": ["all", ["==", "type", "højbebyggelse"]],
          "paint": {
              "fill-color": "#EBEDE6"
          },
          "source": "vector-source"
      },
      {
          "id": "bebygget_lavbebyggelse",
          "source-layer": "bebygget",
          "minzoom": 13,
          "type": "fill",
          "filter": ["all", ["==", "type", "lavbebyggelse"]],
          "paint": {
              "fill-color": "#EBEDE6"
          },
          "source": "vector-source"
      },
      {
          "id": "natur_skov",
          "source-layer": "natur",
          "type": "fill",
          "filter": ["all", ["==", "type", "skov"]],
          "paint": {
               "fill-color": "#EAFAE1"
          },
          "source": "vector-source"
      },
      {
          "id": "infrastruktur_startbane",
          "source-layer": "infrastruktur",
          "type": "line",
          "filter": ["all", ["==", "type", "lufthavn"]],
          "paint": {
              "line-color": "#dadada",
              "line-width": 3
          },
          "source": "vector-source"
      },
      {
          "id": "graenser_havn",
          "source-layer": "graenser",
          "type": "line",
          "filter": ["all", ["==", "type", "havn"]],
          "paint": {
              "line-blur": 2,
              "line-color": "#D2D2D2"
          },
          "source": "vector-source"
      },
      {
          "id": "graenser_kyst",
          "source-layer": "graenser",
          "type": "line",
          "filter": ["all", ["==", "type", "kyst"]],
          "paint": {
              "line-blur": 2,
              "line-color": "#D2D2D2"
          },
          "source": "vector-source"
      },
      {
          "id": "vand_vandløbsflade",
          "source-layer": "vand",
          "minzoom": 13,
          "maxzoom": 20,
          "type": "fill",
          "filter": ["all", ["==", "type", "vandløbsflade"]],
          "paint": {
              "fill-color": "#D4E6F0"
          },
          "source": "vector-source"
      },
      {
          "id": "vand_vandløbsflade_outline",
          "source-layer": "vand",
          "minzoom": 13,
          "maxzoom": 20,
          "type": "line",
           "filter": ["all", ["==", "type", "vandløbsflade"]],
          "paint": {
              "line-color": "#BEE8FF",
              "line-width": 0.8
          },
          "source": "vector-source"
      },
      {
          "id": "vandloeb",
          "source-layer": "vandloeb",
          "type": "line",
          "filter": ["all", ["==", "subtype", "almindelig"]],
          "paint": {
              "line-color": "#BFE8F0",
              "line-width": 0.8
          },
          "source": "vector-source"
      },
      {
          "id": "vandloeb_o12",
          "source-layer": "vandloeb",
          "type": "line",
          "filter": ["all", ["==", "type", "12-"]],
          "paint": {
              "line-color": "#BFE8F0",
              "line-width": 2
          },
          "source": "vector-source"
      },
      {
          "id": "vandloeb_rørlagt",
          "source-layer": "vandloeb",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "subtype", "rørlagt"]],
          "paint": {
              "line-color": "#BFE8F0",
              "line-width": 2,
              "line-dasharray": [4, 4]
          },
          "source": "vector-source"
      },
      {
          "id": "vand_sø",
          "source-layer": "vand",
          "minzoom": 13,
          "maxzoom": 20,
          "type": "fill",
           "filter": ["all", ["==", "type", "sø"]],
          "paint": {
              "fill-color": "#D4E6F0"
          },
          "source": "vector-source"
      },
      {
          "id": "vand_sø_outline",
          "source-layer": "vand",
          "minzoom": 13,
          "maxzoom": 20,
          "type": "line",
           "filter": ["all", ["==", "type", "sø"]],
          "paint": {
              "line-color": "#BEE8FF",
              "line-width": 0.8
          },
          "source": "vector-source"
      },
      {
          "id": "vand_sø_>50000",
          "source-layer": "vand",
          "minzoom": 7,
          "maxzoom": 13,
          "type": "fill",
           "filter": ["all", ["==", "type", "sø"]],
          "paint": {
              "fill-color": "#D4E6F0"
          },
          "source": "vector-source"
      },
      {
          "id": "bebygget_bygning",
          "source-layer": "bebygget",
          "minzoom": 15,
          "type": "fill",
          "filter": ["all", ["==", "type", "bygning"]],
          "paint": {
              "fill-color": "#CCCCCC"
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motortrafikvej_outline",
          "source-layer": "veje",
          "minzoom" : 13,
          "maxzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "motortrafikvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": 6.5
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motortrafikvej_outline_dark",
          "source-layer": "veje",
          "minzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "motortrafikvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[14, 7.5], [15, 9.5], [16, 11.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motorvej_outline",
          "source-layer": "veje",
          "minzoom" : 13,
          "maxzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "motorvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[13, 5], [14, 6], [15, 9], [16, 11], [17, 13]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motorvej_outline_dark",
          "source-layer": "veje",
          "minzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "motorvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#B2B2B2",
              "line-width": {"stops": [[13, 5], [14, 6], [15, 9], [16, 11], [17, 13]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_primær_outline",
          "source-layer": "veje",
          "minzoom" : 13,
          "maxzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "primærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": 5
          },
          "source": "vector-source"
      },
      {
          "id": "veje_primær_outline_dark",
          "source-layer": "veje",
          "minzoom" : 14,
          "type": "line",
          "filter": ["all", ["==", "type", "primærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#B2B2B2",
              "line-width": {"stops": [[14, 5.5], [15, 6], [16, 7]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_sekundær_outline",
          "source-layer": "veje",
          "minzoom" : 13,
          "maxzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "sekundærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[13, 3.5], [14, 5], [15, 5.5], [16, 6.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_sekundær_outline_dark",
          "source-layer": "veje",
          "minzoom" : 14,
          "type": "line",
          "filter": ["all", ["==", "type", "sekundærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#B2B2B2",
              "line-width": {"stops": [[13, 3.5], [14, 5], [15, 5.5], [16, 6.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tertiær_outline",
          "source-layer": "veje",
          "minzoom" : 13,
          "maxzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "tertiærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[13, 1.5], [14, 4.5], [15, 4.5], [16, 6]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tertiær_outline_dark",
          "source-layer": "veje",
          "minzoom" : 14,
          "type": "line",
          "filter": ["all", ["==", "type", "tertiærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#B2B2B2",
              "line-width": {"stops": [[13, 1.5], [14, 4.5], [15, 4.5], [16, 6]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_anden_vej_outline",
          "source-layer": "veje",
          "minzoom" : 13,
          "maxzoom": 14,
          "type": "line",
          "filter": ["all", ["==", "type", "anden vej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[13, 2], [14, 3], [15, 4.5], [16, 6]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_anden_vej_outline_dark",
          "source-layer": "veje",
          "minzoom" : 14,
          "type": "line",
          "filter": ["all", ["==", "type", "anden vej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#B2B2B2",
              "line-width": {"stops": [[13, 2], [14, 3], [15, 4.5], [16, 6]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_sti",
          "source-layer": "veje",
          "minzoom" : 15,
          "type": "line",
          "filter": ["all", ["==", "type", "sti"]],
          "paint": {
              "line-color": "#B2B2B2",
              "line-width": 1
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tilfrakørsel_outline",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "subtype", "til og frakørsel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[6, 4], [14, 5], [18, 11]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tilfrakørselvej",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "subtype", "til og frakørsel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[6, 3], [14, 3], [18, 9]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tilfrakørselvej_zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "subtype", "til og frakørsel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": 1
          },
          "source": "vector-source"
      },
      {
          "id": "veje_anden_vej",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "anden vej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[13, 0.8], [14, 1.5], [15, 3], [16, 4.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_anden_vej_>zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "anden vej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#DCDCDC",
              "line-width": 1
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tertiær",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "tertiærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[13, 0.5], [14, 2.5], [15, 3], [16, 4.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tertiær_>zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "tertiærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#DCDCDC",
              "line-width": 1
          },
          "source": "vector-source"
      },
      {
          "id": "veje_sekundær",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "sekundærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[13, 1], [14, 3.5], [15, 4], [16, 5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_sekundær_>zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "sekundærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#DCDCDC",
              "line-width": {"stops": [[10, 1], [12, 1], [13, 3]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_primær",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "primærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[13, 2.5], [14, 4], [15, 4.5], [16, 5.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_primær_>zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "primærvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#DCDCDC",
              "line-width": {"stops": [[8, 1],[8.5, 1],[10, 1],[12, 2],[13, 3]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motortrafikvej",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "motortrafikvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[13, 4], [14, 6], [15, 8], [16, 10]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motortrafikvej_>zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "motortrafikvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#DCDCDC",
              "line-width": {"stops": [[6, 2], [10, 2], [13, 4]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motorvej",
          "source-layer": "veje",
          "minzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "motorvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {"stops": [[13, 3.5], [14, 4,6], [15, 7,5], [16, 9,5], [17, 11.5]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_motorvej_>zoom13",
          "source-layer": "veje",
          "maxzoom": 13,
          "type": "line",
          "filter": ["all", ["==", "type", "motorvej"],["!=", "subtype", "til og frakørsel"],["!=", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#DADBDC",
              "line-width": {"stops": [[6, 3], [7, 3], [10, 4], [13, 4]]}
          },
          "source": "vector-source"
      },
      {
          "id": "veje_tunnel",
          "source-layer": "veje",
          "type": "line",
          "filter": ["all", ["==", "niveau", "tunnel"]],
          "layout": {"line-cap": "butt", "visibility": "visible"},
          "paint": {
              "line-color": "#828282",
              "line-width": 1,
              "line-dasharray": [4, 4]
          },
          "source": "vector-source"
      },
      {
          "id": "jernbane",
          "source-layer": "jernbane",
          "minzoom" : 13,
          "type": "line",
          "filter": [
              "all",
              ["!=", "niveau", "tunnel"],
              ["!=", "subtype", "sidespor"]
          ],
          "paint": {
              "line-color": "#CCCCCC",
              "line-width": {"stops": [[0, 1], [11, 1], [12, 1], [13, 3]]}
          },
          "source": "vector-source"
      },
      {
          "id": "jernbane_inline",
          "source-layer": "jernbane",
          "type": "line",
          "minzoom" : 13,
          "filter": [
              "all",
              ["!=", "niveau", "tunnel"],
              ["!=", "subtype", "sidespor"]
          ],
          "paint": {
              "line-color": "#ffffff",
              "line-width": 1.5,
              "line-dasharray": [5, 5]
          },
          "source": "vector-source"
      },
      {
          "id": "jernbane_>zoom13",
          "source-layer": "jernbane",
          "maxzoom" : 13,
          "type": "line",
          "filter": [
              "all",
              ["!=", "niveau", "tunnel"],
              ["!=", "subtype", "sidespor"]
          ],
          "paint": {
              "line-color": "#828282",
              "line-width": {"stops": [[0, 1], [11, 1], [12, 1], [13, 3]]}
          },
          "source": "vector-source"
      },
      {
          "id": "jernbane_tunnel",
          "source-layer": "jernbane",
          "type": "line",
          "filter": [
              "all",
              ["==", "niveau", "tunnel"],
              ["!=", "subtype", "sidespor"]
          ],
          "paint": {
              "line-color": "#9C9C9C",
              "line-width": 1,
              "line-dasharray": [2, 3]
          },
          "source": "vector-source"
      },
      {
          "id": "punkter_togstation",
          "source-layer": "punkter",
          "minzoom" : 15,
          "type": "circle",
          "filter": ["all", ["==", "type", "togstation"]],
          "layout": {
              "icon-allow-overlap": false,
              "icon-ignore-placement": false
          },
          "paint": {
              "circle-color": "#C3C3C3",
              "circle-radius": 10
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_bebyggelse<1000000",
          "source-layer": "tekst_punkt",
          "minzoom" : 13,
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "type", "bebyggelse"], ["!=", "subtype", "by"], ["!=", "subtype", "kolonihave"], ["<=", "subsubtype", 1000000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[12, 10], [14, 12]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
           },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_bebyggelse<2500000",
          "source-layer": "tekst_punkt",
          "minzoom" : 12,
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "type", "bebyggelse"], ["!=", "subtype", "by"], ["!=", "subtype", "kolonihave"], [">=", "subsubtype", 1000000], ["<=", "subsubtype", 2500000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[11, 12], [12, 10], [14, 16]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
           },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_bebyggelse<5000000",
          "source-layer": "tekst_punkt",
          "minzoom" : 12,
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "type", "bebyggelse"], ["!=", "subtype", "by"], ["!=", "subtype", "kolonihave"], [">=", "subsubtype", 2500000], ["<=", "subsubtype", 5000000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[11, 14], [12, 12], [14, 18]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_bebyggelse>5000000",
          "source-layer": "tekst_punkt",
          "minzoom" : 11,
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "type", "bebyggelse"], ["!=", "subtype", "by"], ["!=", "subtype", "kolonihave"], [">=", "subsubtype", 5000000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[11, 16], [12, 14], [14, 24]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "vejnavne",
          "source-layer": "veje",
          "minzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["!=", "type", "sti"], ["!=", "subtype", "til og frakørsel"], ["!=", "subtype", "rundkørsel"]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": 13,
              "text-padding": 10,
              "text-allow-overlap": false,
              "text-ignore-placement": false,
              "symbol-placement": "line",
              "symbol-spacing": 5000,
              "symbol-avoid-edges": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<100",
          "source-layer": "tekst_punkt",
          "minzoom" : 12,
          "maxzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], ["<=", "subsubtype", 100]],
          "layout": {
              "text-field": "{navn}",
          "text-anchor": "center",
              "text-size": {"stops": [[12, 12], [14, 14], [15, 12]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<500",
          "source-layer": "tekst_punkt",
          "minzoom" : 10,
          "maxzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 100], ["<=", "subsubtype", 500]],
          "layout": {
              "text-field": "{navn}",
          "text-anchor": "center",
              "text-size": {"stops": [[10, 11], [11, 11], [12, 10], [14, 20]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<1000",
          "source-layer": "tekst_punkt",
          "minzoom" : 10,
          "maxzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 500], ["<=", "subsubtype", 1000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[10, 11], [11, 11], [12, 10], [14, 20]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<5000",
          "source-layer": "tekst_punkt",
          "minzoom" : 9,
          "maxzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 1000], ["<=", "subsubtype", 5000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[9, 10], [10, 11], [11, 11], [12, 14], [14, 25]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<10000",
          "source-layer": "tekst_punkt",
          "minzoom" : 8.5,
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 5000], ["<=", "subsubtype", 10000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[9, 11], [11, 14], [12, 18], [14, 25]]},
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<25000",
          "source-layer": "tekst_punkt",
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 10000], ["<=", "subsubtype", 25000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "bottom",
              "text-size": {"stops": [[8, 10], [9, 12], [11, 14], [13, 21]]},
              "text-font": ["Verdana"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<50000",
          "source-layer": "tekst_punkt",
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 25000], ["<=", "subsubtype", 50000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "top",
              "text-size": {"stops": [[9, 10], [11, 12], [12, 14], [13, 16]]},
              "text-font": ["Verdana Bold"],
              "text-padding": 5,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<100000",
          "source-layer": "tekst_punkt",
          "maxzoom" : 14,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 50000], ["<=", "subsubtype", 100000]],
          "layout": {
              "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[9, 11], [11, 15], [12, 17], [13, 18]]},
              "text-font": ["Verdana Bold"],
              "text-padding": 1,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
           },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by<300000",
          "source-layer": "tekst_punkt",
          "maxzoom" : 13,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 100000], ["<=", "subsubtype", 300000]],
          "layout": {
               "text-field": "{navn}",
              "text-anchor": "center",
              "text-size": {"stops": [[9, 12], [11, 20], [12, 22]]},
              "text-font": ["Verdana Bold"],
              "text-padding": 1,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_by>300000",
          "source-layer": "tekst_punkt",
          "maxzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "by"], [">=", "subsubtype", 300000]],
          "layout": {
               "text-field": "{navn}",
              "text-anchor": "left",
              "text-size": {"stops": [[9, 16], [11, 22], [12, 30]]},
              "text-font": ["Verdana Bold"],
              "text-padding": 1,
              "text-allow-overlap": false,
              "text-ignore-placement": false
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      },
      {
          "id": "tekst_punkt_stationsnavn",
          "source-layer": "tekst_punkt",
          "minzoom" : 15,
          "type": "symbol",
          "filter": ["all", ["==", "subtype", "tog"]],
          "layout": {
              "text-field": "{navn}",
              "text-offset": [1.5, 3],
              "text-transform": "uppercase",
              "text-size": 10,
              "text-font": ["Verdana"],
              "text-padding": 5
          },
          "paint": {
              "text-color": "#828282"
          },
          "source": "vector-source"
      }
  ],
  "metadata": {
      "maputnik:renderer": "ol"
  }
}