# Vejledning - hvordan Vector Tiles - skæmrkort indlæses og bruges i forskellige gis klienter

Herunder beskrives det hvordan Vector Tiles skærmkort kan tilgåes i gennem følende GIS klienter
- [ArcGIS Pro](#arcgis)
- [QGIS](#qgis)

## ArcGIS Pro <a name="arcgis"></a>

For at tilså Vector Tiles Skærmkort I ArcGIS Pro, skal du istedet for APIét, bruge style filen direkte. Du skal bruge style filerne i Webmercator (EPSG:3857), altså de style filer der har '3857' som prefix. 
Link til style filer finder du her. 

Find 'Data From Path' under: 
Map - Add Data - Data from path

![billede](https://github.com/user-attachments/assets/a155d9e4-8227-4154-a27b-27e0949f7f1d)

Derefter dukker der en boks op, som først kun har ’Path’, som udfyldes med Webmercator udgaven af den style fil 

Når linket er kopiret ind, dukker der efter et par milisekunder endnu en mulighed op – service type – her skal du udfylde 'Vectior Tile Service'! 

![billede](https://github.com/user-attachments/assets/193cfd10-ba39-4aa9-9a43-3d67f48d33f5)

Til sidst skal du udfylde din en ’Custom parameter’ 
Her skal du skrive ’token’ ud for parameter, og så finde det dit token fra din dataforsynings bruger ind, og klikke på add. 


## QGIS <b name="qgis"></b>

Brug Vector Tiles i QGIS med Dataforsyningens QGIS-plugin: https://confluence.sdfi.dk/display/MYD/Dataforsyning-plugin+til+QGIS
