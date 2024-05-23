# Vejledning til brug af Vector Tiles skærmkort på SDFI LABS 
Vector Tiles udgaven af skærmkortet kan tilgåes via [LABS](https://dataforsyningen.dk/labs/4933) eller direkte igennem [kortvisningen](https://labs.dataforsyningen.dk/skaermkort_vector_tiles). 
Vector Tiles skærmkort udstilles i 4 forskellige styles, det klassiske skærmkort, det dæmpet skærmkort, det grå skærmkort og i en ny udgave; det mørke skærmkort. Style filerne for disse 4 kort er tilgængelige under [styles](https://github.com/SDFIdk/vector_tiles_frontend/tree/main/public/styles), og det er tiltænkt at brugeren kan hente disse ned, ændre i dem, og til sidst trække dem ind i [kortvisningen](https://labs.dataforsyningen.dk/skaermkort_vector_tiles) og få vist sit helt eget kort.
Herunder følger en kort beskrivelse af datagrundlag og datamodellen for Vector Tiles skærmkort samt en kort vejledning til hvordan du selv kan ændre i style filen og få vist din egen udgave af skærmkortet direkte i browseren. 


[Datagrundlag](#datagrundlag)

[Generelt om style filerne](#stylefiles)

[Eksempel 1 -Dæmpet kort med farverige skove, søer og vandløb.](#eksempel1)


## Datagrundlag <a name="datagrundlag"></a>
Nedenfor beskrives de objekttyper der er tilgængelige og hvilke der er brugt i de prædefinerede skærmkort. KL (Klassisk), DP+G+M (dæmpet, grå og mørkt). Derudover er der også data tilgængeligt som ikke optræder i nogen af kortene som de ser ud i dag. Fx ’plads’.

Data er GeoDanmark data, som er selekteret for hvert zoom, Eks. Bygninger vil kun kunne medtages i de inderste levels/zoom. 

> [!NOTE]
> Datasættet er pt. statisk med data hentet i april 2024. Når Vector Tiles idrifsættes på dataforyningen vil data blive ajourført løbende.

##Indhold:

> ## bebygget
>
> Dette lag viser flere forskellige bebyggelsestyper alle fra GeoDanmark 

### objekttype:
- begravelsesområde
- by
  - indbyggertal
- bygning 
  - andet 
  - bygning 
  - drivhus 
  - husbåd 
  - ikke tildelt 
  - tank/silo
- bykerne
- plads
- rekreativområde

### Generalisering af data 
Som det er lige nu findes der ikke nogen generaliseret data i datamodellen. Derfor adskiller Vector Tiles skærmkortet sig en del fra raster skærmkortet når man fx zoomer ud. er der mange veje synlige. 
Generaliseret data vil blive tilføjet omkring Q4 2024. 

## Generelt om style filerne <a name="stylefiles"></a>
Style filen er bygget op, så det der ligger øverst bliver tegnet først og de efterfølgende objekttyper lægger sig oven på. Derfor vil rækkefølgen oftest være arealer øverst, dernæst linjer og til sidst punkter.
Teksterne har typen symbol og bliver altid visuelt lagt øverst uanset, hvor man placerer dem i stylefilen.
Farverne er defineret i HEX men kan nemt ændres til RGB.      "fill-color": "#e6f3fc"   =   "fill-color": "RGB(230, 243, 252)"

Skalaer er i levels, hvor level 0 er verden og level 20 er brønddæksel. 

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

 "id":  skal være unikt 

## Eksempler
på hvordan du kan lave dit eget kort

### Eksempel 1 -Dæmpet kort med farverige skove, søer og vandløb. <a name="eksempel1"></a>

Med udgangspunkt i det **dæmpet skærmkort**, ønskes et udtryk hvor skove, søer og vandløb alle fremhæves med markante farver. Derfor gøres følgende: 

Laget med skove søges frem i filen og farvekoden ændres fra #EAFAE1, til eksempelvis #5be80c. 


