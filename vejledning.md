# Vejledning til brug af Vector Tiles skærmkort på SDFI LABS 
Vector Tiles udgaven af skærmkortet kan tilgåes via [LABS](https://dataforsyningen.dk/labs/4933) eller direkte igennem [kortvisningen](https://labs.dataforsyningen.dk/skaermkort_vector_tiles). 
Vector Tiles skærmkort udstilles i 4 forskellige styles, det klassiske skærmkort, det dæmpet skærmkort, det grå skærmkort og i en ny udgave; det mørke skærmkort. Style filerne for disse 4 kort er tilgængelige under [styles](https://github.com/SDFIdk/vector_tiles_frontend/tree/main/public/styles), og det er tiltænkt at brugeren kan hente disse ned, ændre i dem, og til sidst trække dem ind i [kortvisningen](https://labs.dataforsyningen.dk/skaermkort_vector_tiles) og få vist sit helt eget kort.
Herunder følger en kort beskrivelse datamodellen for Vector Tiles skærmkort samt en kort vejledning til hvordan du selv kan ændre i style filen og få vist din egen udgave af skærmkortet direkte i browseren. 


[Datamodel](#datamodel)

[Generelt om style filerne](#stylefiles)

[Eksempel 1 -Dæmpet kort med farverige skove, søer og vandløb.](#eksempel1)


## Datamodel <a name="datamodel"></a>
Nedenfor beskrives de objekttyper der er tilgængelige og hvilke der er brugt i de prædefinerede skærmkort. KL (Klassisk), DP+G+M (dæmpet, grå og mørkt). Derudover er der også data tilgængeligt som ikke optræder i nogen af kortene som de ser ud i dag. Fx ’plads’.

Data stammer fra GeoDanmark, Danmarks Administrative Geografiske Inddeling (DAGI), Stednavne XX. Hvis ikke andet er opgivet i listen nedenfor stammer data fra GeoDanmark. Data er selekteret for hvert zoom, Eks. Bygninger vil kun kunne medtages i de inderste levels/zoom. 

> [!NOTE]
> Datasættet er pt. statisk med data hentet i april 2024. Når Vector Tiles idrifsættes på dataforyningen vil data blive ajourført løbende.


<!-- Objekttypen er den der i style filen kan kaldes via sourcetype. -->

Datamodellen er bygget op med en række sourcelayers hvori der ligger en række forskellige (objekt-)typer. Hver type kan have både subtyper og subsubtyper.

> ## sourcelayer
>

- **type**
  - subtype
    - subsubtype
- **type**


Nedenfor er hver enkekt sourcelayer og indhold af type, subtype og subsubtype beskrevet. 


> ## bebygget
>
> Dette lag viser flere forskellige bebyggelsestyper. Geometri typen er polygon

- **begravelsesområde**
- **by**
  - indbyggertal
- **bygning** 
  - andet 
  - bygning 
  - drivhus 
  - husbåd 
  - ikke tildelt 
  - tank/silo
- **bykerne**
- **plads** (bruges ikke)
- **rekreativområde**

> ## greanser
>
> Dette lag indeholder forskellige grænser. Geomeyti typen er linje

- **havn**
  - anløbsbro
  - kyst
  - sø
  - vandløb
- **kyst**
- **eøz**: Den ekslusive økonomisk zone (DAGI). (vises kun i KL)

> ## industri
>
> Dette lag indeholder industrielle områder. Samtlige lag vises kun i KL. Geometritypen er polygon

- **erhverv**
- **gartneri**
- **råstofområde**
- **teknisk anlæg**
- **teknisk areal**
  - affaldsanlæg
  - energiforsyningsanlæg
  - genbrugsplads
  - ikke tildelt
  - lufthavn
  - materielgård
  - militært anlæg
  - parkeringsanlæg
  - sportsanlæg
  - togstation/rangeranlæg
  - ukendt
  - vandrensningsanlæg
  - vandværk
  - vindmøllepark

> ## infrastruktur
>
> Dette lag indeholder objekter om forskellige intrastruktur fra lufthavne. Geometritypen er polygon

- **lufthavn**
  - helipad
  - plads
  - start_landing
  - taxivej

> ## jernbane
>
> Dette lag indeholder objekter om alle typer af jernbaner. Geometritypen er linje.

- **ingen tog**
  - gennemgående spor
  - hovedspor
  - sidespor (bruges ikke)
- **letbane**
  - gennemgående spor
  - hovedspor
  - sidespor (bruges ikke)
  - øvrige togvejsspor
- **metro**
  - gennemgående spor
  - hovedspor
  - sidespor (bruges ikke)
  - øvrige togvejsspor
- **s-tog**
  - gennemgående spor
  - hovedspor
  - sidespor (bruges ikke)
  - øvrige togvejsspor


> ## punkter
>

- **togstation**

  
  
> ## natur
>
> Dette lag indeholder objekter om forskellige naturtyper, samt afgrænsninger af landeområder. Geometritypen er polygon.

- **hede**
- **kratbevoksning**
- **land**
- **sandklit**
- **skov**
- **udland**

> ## vand
>
> Dette lag indeholder objekter om forskellige vandflader. Geometritypen er polygon.

- **basin**
  - andet
  - ikke tildelt
  - overløbsbassin
  - regnvandsbassin
  - rensningsanlæg
  - svømmebassin
  - ukendt
- **sø**
  - fiskedam
  - sø
- vandløbsflade [^1]
- hav

> ## vandloeb
>
> Dette lag indeholder objekter om forskellige vandloebslinjer. Geometritypen er linje.

- **0-2.5**
  - almindelig
- **12**
  - almindelig  
- **2.5-12**
  - almindelig
- **ikke tildelt**
  - almindelig
- **ukendt**
  - almindelig
  - gennem sø
  - rørlagt
 

  

[^1]:Laget vandløbsflader, er et datasæt fremstillet vandløbslinjer fra Geodanmark. Laget er IKKE tilgængeligt via GeoDanmark  


### Generalisering af data 
Som det er lige nu, findes der ikke noget generaliseret data i datamodellen. Derfor adskiller Vector Tiles skærmkortet sig en del fra raster skærmkortet, fx når man zoomer ud er der mange veje synlige. 
Generaliseret data vil blive tilføjet omkring Q4 2024. 

## Generelt om style filerne <a name="stylefiles"></a>
Style filen er bygget op, så det der ligger øverst bliver tegnet først og de efterfølgende objekttyper lægger sig oven på. Derfor vil rækkefølgen oftest være arealer øverst, dernæst linjer og til sidst punkter.
Teksterne har typen symbol og bliver altid visuelt lagt øverst uanset, hvor man placerer dem i stylefilen.
Farverne er defineret i HEX men kan nemt ændres til RGB.      "fill-color": "#e6f3fc"   =   "fill-color": "RGB(230, 243, 252)"

Skalaer er i levels, hvor man populært kan sige at level 0 er verden og level 20 er et brønddæksel. 

Opbygning er således 

```
        {
            "id": "vand_sø",
            "source-layer": "vand",
            "minzoom": 7,
            "maxzoom": 13,
            "type": "fill",
            "filter": ["all", ["==", "type", "vandløbsflade"]],
            "paint": {
                "fill-color": "#e6f3fc"
            },
            "source": "vector-source"
        },
```

```"id"``` skal være unikt 

```"source-layer"``` skal pege på en af objekttyperne listede i [datamodellen](#datamodel)

```"minzoom"``` indikere det mindste zoom hvor laget optræder 

```"maxzoom"´``` indikere det største zoom hvor laget optræder 

```"type"``` geometritype; polygon, line, point

```"filter"``` filter til at udvælge type og subtype XXX

```"paint"``` visualisering (farve, størrelse osv.) Farverne er defineret i HEX men kan nemt ændres til RGB. 

"fill-color": "#e6f3fc"   =   "fill-color": "RGB(230, 243, 252)"


## Eksempler
Her under beskrives 3 eksempler på konkrete måder hvorpå brugeren selv kan lave om i style filerne, for på den måde at lave sit eget kort. 
Udover de konkrete eksempler nævnt her, har brugeren også selv mulighed for at tilføje ydereligere data, som er markeret i datamodedllen med _bruges ikke_. 

### Eksempel 1 -Dæmpet kort med farverige skove, søer og vandløb. <a name="eksempel1"></a>

Med udgangspunkt i det **dæmpet skærmkort**, ønskes et udtryk hvor skove, søer og vandløb alle fremhæves med markante farver. Derfor gøres følgende: 

Laget med skove søges frem i filen og farvekoden ændres fra #EAFAE1, til eksempelvis #5be80c. 

![billede](https://github.com/SDFIdk/vector_tiles_frontend/assets/168088613/ba8903a7-4e56-41e8-99e5-116525d039a8)



