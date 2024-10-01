# API
URL til API'et er dette:
`https://api.dataforsyningen.dk/rest/skaermkort_vector_tiles/v1.0/EPSG:25832/EPSG:25832:{z}/{y}/{x}?f=application/vnd.mapbox-vector-tile`

Husk at tilføje en token, enten som header eller URL parameter, læs mere om det her: https://confluence.sdfi.dk/display/MYD/Log+ind+og+Token

Bemærk at API'et ikke er implementeret som OGC API-Tiles standarden, men minder om den.

Som webapplikation er API'et kun testet i Openlayers med `ol-mapbox-style`. Dette repository kan bruges som eksempel på en implementation.

Hvis du vil bruge API'et i din GIS-klient, virker det foreløbig kun i QGIS. Du kan benytte Dataforsyningens QGIS-plugin: https://confluence.sdfi.dk/display/MYD/Dataforsyning-plugin+til+QGIS
