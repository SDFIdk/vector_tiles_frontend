# Vejledning til brug af Vector Tiles skærmkort på SDFI LABS 
Vector Tiles udgaven af skærmkortet kan tilgåes via [LABS](https://dataforsyningen.dk/labs/4933) eller direkte igennem [kortvisningen](https://labs.dataforsyningen.dk/skaermkort_vector_tiles). 
Vector Tiles skærmkort udstilles i 4 forskellige styles, det klassiske skærmkort, det dæmpet skærmkort, det grå skærmkort og i en ny udgave; det mørke skærmkort. Style filerne for disse 4 kort er tilgængelige under [styles](https://github.com/SDFIdk/vector_tiles_frontend/tree/main/public/styles), og det er tiltænkt at brugeren kan hente disse ned, ændre i dem, og til sidst trække dem ind i [kortvisningen](https://labs.dataforsyningen.dk/skaermkort_vector_tiles) og få vist sit helt eget kort.
Herunder følger en kort beskrivelse af datamodellen for Vector Tiles skærmkort samt en kort vejledning til hvordan du selv kan ændre i style filen, og få vist din egen udgave af skærmkortet, direkte i browseren. 


[Datamodel](#datamodel)
  - [Bebygget](#bebygget)
  - [Grænser](#graenser)
  - [Industri](#industri)
  - [Infrastruktur](#infra)
  - [Jernbane](#jernbane)
  - [Natur](#natur)
  - [Punkter (togstationer)](#punkter)
  - [Vand](#vand)
  - [Vandløb](#vandloeb)
  - [Veje og vejnavne](#veje)
  - [Tekst punkt](#tekstp)
  - [Tekst linje](#tekstl)

[Generelt om style filerne](#stylefiles)

[Eksempel 1 -Dæmpet kort med farverige skove, søer og vandløb](#eksempel1)

[Eksempel 2 - Kort uden stednavne](#eksempel2)

[Eksempel 3 - Kun visning af veje](#eksempel3)

## Datamodel <a name="datamodel"></a>
Nedenfor beskrives de objekttyper der er tilgængelige og hvilke der er brugt i de prædefinerede skærmkort. KL (Klassisk), DP+G+M (dæmpet, grå og mørkt). Derudover er der også data tilgængeligt som ikke optræder i nogen af kortene som de ser ud i dag. Fx ’plads’, disse er market med _bruges ikke_.

Data stammer fra GeoDanmark Vektor, Danmarks Administrative Geografiske Inddeling (DAGI), Danske Stednavne og Danmarks Adresseregister (DAR). Hvis ikke andet er opgivet i listen nedenfor stammer data fra GeoDanmark Vektor. Data er selekteret for hvert zoom, Eks. Bygninger vil kun kunne medtages i de inderste levels/zoom. 

> [!NOTE]
> Datasættet er pt. statisk med data hentet i april 2024. Når Vector Tiles idriftsættes på dataforsyningen vil data blive ajourført løbende.



Datamodellen er bygget op med en række sourcelayers hvori der ligger en række forskellige (objekt-)typer. Hver type kan have både subtyper og subsubtyper.

> ## sourcelayer
>

- **type**
  - subtype
    - subsubtype
- **type**


Nedenfor er hver enkekt sourcelayer og indhold af type, subtype og subsubtype beskrevet. 


> ## bebygget <b name="bebygget"></b>
>
> Dette lag viser flere forskellige bebyggelsestyper. Geometritypen er polygon

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

> ## graenser <b name="graenser"></b>
>
> Dette lag indeholder forskellige grænser. Geometritypen er linje

- **havn**
  - anløbsbro
  - kyst
  - sø
  - vandløb
- **kyst**
- **eøz**: Den ekslusive økonomisk zone (DAGI).

> ## industri <b name="industri"></b>
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

> ## infrastruktur <b name="infra"></b>
>
> Dette lag indeholder objekter om forskellige intrastruktur fra lufthavne. Geometritypen er polygon

- **lufthavn**
  - helipad
  - plads
  - start_landing
  - taxivej

> ## jernbane <b name="jernbane"></b>
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


> ## punkter <b name="punkter"></b>
>

- **togstation**

  
  
> ## natur <b name="natur"></b>
>
> Dette lag indeholder objekter om forskellige naturtyper, samt afgrænsninger af landeområder. Geometritypen er polygon.

- **hede**
- **kratbevoksning** (bruges ikke)
- **land**
- **sandklit**
- **skov**
- **vådområde** (bruges ikke)
- **udland**

> ## vand <b name="vand"></b>
>
> Dette lag indeholder objekter om forskellige vandflader. Geometritypen er polygon.

- **basin**
  - andet (bruges ikke)
  - ikke tildelt (bruges ikke)
  - overløbsbassin (bruges ikke)
  - regnvandsbassin (bruges ikke)
  - rensningsanlæg (bruges ikke)
  - svømmebassin (bruges ikke)
  - ukendt (bruges ikke)
- **sø**
  - fiskedam
  - sø
- vandløbsflade [^1]
- hav


[^1]:Laget vandløbsflader, er et datasæt fremstillet vandløbslinjer fra Geodanmark. Laget er IKKE tilgængeligt via GeoDanmark  

> ## vandloeb <b name="vandloeb"></b>
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
  - gennem sø (bruges ikke)
  - rørlagt
 
> ## veje <b name="veje"></b>
>
> Dette lag indholder vejmidter fra GeoDanmark. Inddelingen af motortrafik-, motor- primær-, sekundær- og tertiærvej er lavet på baggrund af de to attributter vejkategori og trafikart fra GeoDanmark. 
> Vejnavne er koblet til dette datasæt, via vejkode. Vejnavne kommer fra DAR. Geometritypen er linje.

- **anden vej**
- **motortrafikvej**
  - rundkørsel
  - til og frakørsel
  - (intet subtype navn, reseterende del af motortrafikveje)
- **motorvej**
  - til og frakørsel
  - (intet subtype navn, reseterende del af motorveje)
- **primærvej**
  - rundkørsel
  - til og frakørsel
  - (intet subtype navn, reseterende del af primærveje)
- **sekundærvej**
  - rundkørsel
  - (intet subtype navn, reseterende del af sekundærveje)
- **sti**
- **tertiærvej**
  - rundkørsel
  - (intet subtype navn, reseterende del tertiærveje)

> ## tekst_punkt <b name="tekstp"></b>
>
> Dette lag indeholder tekster fra punkter, alle fra Danske Stednavne.
> 
> Samtlige subtyper, på nær by - indbyggetal og standsningsted - tog, har subsubtypen: areal. 

- **bebyggelse**
  - by
  - indbygger antal
  - bydel
  - industriområde
  - kolonihave
  - sommerhusområde
  - sommerhusdelområde 
- **begravelsesplads**
- **bygning**
  - anden bygning
  - gård
  - herregård
  - hospital
  - hus
  - slot
- **landskabsform**
  - ø
  - øgruppe
- **lufthavn**
  - mindre lufthavn
  - større lufthavn
- **naturareal**
  - hede
  - parkanlæg
  - sandklit
  - skovplantage
  - strand
- **seværdighed**
  - anden seværdighed
  - arboret
  - blomsterpark
  - botaniskhave
  - dyrepark
  - forlystelsespark
  - frilandsmuseum
  - zoologisk have
- **sø**
- **standsningssted**
  - tog

> ## tekst_linje <b name="tekstl"></b>
>
> Dette lag indeholder tekster på linjer, fra Danske Stednavne. (For info om vejnavne se [veje](#veje))

- **vandløb**

  

### Generalisering af data 
Som det er lige nu, findes der ikke noget generaliseret data i datamodellen. Derfor adskiller Vector Tiles skærmkortet sig en del fra raster skærmkortet, fx når man zoomer ud er der mange veje synlige. 
Generaliseret data vil blive tilføjet omkring Q4 2024. 

## Generelt om style filerne <a name="stylefiles"></a>
Style filen er bygget op, så det der ligger øverst bliver tegnet først og de efterfølgende objekttyper lægger sig oven på. Derfor vil rækkefølgen oftest være arealer øverst, dernæst linjer og til sidst punkter.
Teksterne har typen symbol og bliver altid visuelt lagt øverst uanset, hvor man placerer dem i stylefilen.
Farverne er defineret i HEX men kan nemt ændres til RGB.      "fill-color": "#e6f3fc"   =   "fill-color": "RGB(230, 243, 252)"

Skalaer er i levels, hvor man populært kan sige at level 0 er verden og level 20 på bygningss niveau. 

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

Med udgangspunkt i det **dæmpet skærmkort**, ønskes et udtryk hvor skove, søer og vandløb alle fremhæves med markante farver. Dvs. i style filen er der udlukkende behov for at ændre farvekode for de ønskede lag. 
Laget med skov søges frem i style filen og farvekoden ændres fra #EAFAE1, til eksempelvis #5be80c:  

```
90        {
91            "id": "natur_skov",
92            "source-layer": "natur",
93            "type": "fill",
94			"filter": ["all", ["==", "type", "skov"]],
95            "paint": {
96                 "fill-color": "#5be80c"
97            },
98            "source": "vector-source"
99        },
```
Som det næste søges der efter ’sø’. Der kommer i alt tre resultater frem: vand_sø, vand_sø_outline og vand_sø >50000. Det kan ses at der vises forskellige lag af søer i forskellige skaler, derfor ændres farvekoden fra #D4E6F0 til eksempelvis #17ceed for laget vand_sø og vand_sø >50000.

```
193		{
194            "id": "vand_sø",
195            "source-layer": "vand",
196			"minzoom": 13,
197			"maxzoom": 20,
198            "type": "fill",
199			 "filter": ["all", ["==", "type", "sø"]],
200            "paint": {
201                "fill-color": "#17ceed"
202            },
203            "source": "vector-source"
204        },
205		{
206            "id": "vand_sø_outline",
207            "source-layer": "vand",
208			"minzoom": 13,
209			"maxzoom": 20,
210            "type": "line",
211			 "filter": ["all", ["==", "type", "sø"]],
212            "paint": {
213                "line-color": "#BEE8FF",
214				"line-width": 0.8
215            },
216            "source": "vector-source"
217        },
218		{
219            "id": "vand_sø_>50000",
220            "source-layer": "vand",
221			"minzoom": 7,
222			"maxzoom": 13,
223            "type": "fill",
224			 "filter": ["all", ["==", "type", "sø"]],
225            "paint": {
226                "fill-color": "#17ceed"
227            },
228            "source": "vector-source"
229        },
```

Til sidst søges der på ’vandløb’. Her kan ses det at der er flere forskellige lag der definere style for vandløb, bl.a. ’vandloeb’, ’vandloeb_o12’ (vandløb der er over 12 meter i bredden) og ’vandloeb_rørlagt’. Alle disse tre har den samme farve kode, og den ændres således fra #BFE8F0 til #1e90ff. 
De sidste to lag der kan søges frem er ’vand_vandløbsflade’ og vand_vandløbsflade_outline. Herunder vælges at vand_vandløbsflade ændres fra #D4E6F0 til #17ceed (lige som for søerne) 
Når disse ændringer er gemt, trækkes json filen direkte ind i browser under knappen ’Træk og slip din egen style fil her for at tilføje den til kortet’ og så dukker dette kort frem i browseren: 

![billede](https://github.com/SDFIdk/vector_tiles_frontend/assets/168088613/ba8903a7-4e56-41e8-99e5-116525d039a8)



### Eksempel 2 -Kort uden stednavne. <a name="eksempel2"></a>

Med udgangspunkt i style filen for det **grå skærmkort** ønskes der at lave et kort i gråtoner, men uden vejnavne, stednavne eller andre former for tekster. 
Når man kigger style filen igennem for det grå skærmkort ses det at der fra linje ```704``` og frem til linje ```1033``` udelukkende er tekst data. Disse linjer slettes derfor. Det sidste komma skal også slettes. Det sidste lag i filen er således punkter_togstation, og ser sådan her ud:
```
688	    {
689            "id": "punkter_togstation",
690            "source-layer": "punkter",
691			"minzoom" : 15,
692            "type": "circle",
693			"filter": ["all", ["==", "type", "togstation"]],
694			"layout": {
695                "icon-allow-overlap": false,
696                "icon-ignore-placement": false
697            },
698            "paint": {
699				"circle-color": "#C3C3C3",
700				"circle-radius": 10
701            },
702            "source": "vector-source"
703        }
704    ],
705    "metadata": {
706        "maputnik:renderer": "ol"
708    }
709  }
```
Når denne style files trækkes ind i kortvisningen ser det således således ud: 

![billede](https://github.com/SDFIdk/vector_tiles_frontend/assets/168088613/0a1372ff-665d-4ebd-ba3b-1ac6f5067fb7)


### Eksempel 3 - Kun visning af veje. <a name="eksempel3"></a>
Med udgangspunkt i style filen for det det **klassiske skærmkort**.    
