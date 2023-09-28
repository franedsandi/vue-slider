The revenge of the carousel
===
**Descrizione:**
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Al click su una thumb, visualizzare in grande l’immagine corrispondente
===
**Bonus:**
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
===
**Consigli del giorno:**
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe
===
**Step by step:**
1. get the array from last carousel
2. get the layout and the css from last carousel
3. use the previously made funtions as methods in order to keep all the things already made adaptable to vue
4. using v-model to display the images
5. use v-for and use the last layout as a template
6. with the use of v-bind add the claas hide to the elements with index diferent than the actual index counter
7. again with v-model fill the gaps in de template
8. with v-model display the thumbnails
9. add an event listener on thumbnail clicks that will change the image displayed (use the index)
10. add an event listener click to top arrow and bottom arrow to change the images
11. create an interval of time were the image change automaticaly each 3 second (same as the previous carrousel)
12. add an event listener to the invert button in order to invert the display order of autoplay pictures 
13. add an event listener when the mouse  enter into slider the autoplay will stop
14. add an event listener, when the mouse leave the slider it will continue the autoplay