/*
Flex - menjen össze vagy menjenek be az elemek egymás alá - felé 
flex-wrap: unwrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;

milyen pozicióban lesznek az elemek 
flex-direction: column -> egymás alatt mintha block lenne 
flex-direction: row -> egymás mellett, alapbeállítás 
flex-direction: column-reverse -> mint a column, csak fordítva vannak az elemek 
flex-directiom: row-reverse

horizontális poziciónálás 
justify-content: start, end, center, space-between, space-around, space-evenly

vertikális poziciónálás 
ha több sor van vagy ha egy sor van 
- ha egy sor van 
    align-items: start, end, center
- ha több sor van 
    align-content: start, end, center, space-between, space-around, space-evenly 

flex-grow , flex-basis
1. flex-grow 
    mindegyik elemnek meg kell adni, arányos (1, 2 ,2 vagy 1, 1, 3 stb)
2. flex-basis 
    itt meg abszolutértékben adjuk meg (flex-basis: 300px; vagy akármennyi)

Elemeknek a sorrendje 
order!!!! fontos, hogy ezt is mindegyik elemnek meg kell, hogy adjuk és nem lehet két egyforma 

Grid
grid-template-columns: px % vagy fr, auto
grid-template-rows: px % fr, auto
fontos, repeat() !!! 

ha template-columns: px-be van megadva akkor itt is van a justify-content
template-rows: px-be akkor meg ha több sor van akkor align-content 
aling-items - meg ha egy sor van és akkor csak start end center lehet 

grid-column-gap 
grid-row-gap
-> 
grid-gap!!!!!! 
*/