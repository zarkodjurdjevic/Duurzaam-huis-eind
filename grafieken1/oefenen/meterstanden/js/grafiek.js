const startGrafiek = () => {
    // Hier komt de jouw code die na het laden van de pagina wordt uitgevoerd
    laadJSON("standen2json.php")
    
    
}

const laadJSON = (url) => {

    const aanvraag = new XMLHttpRequest();

  // Omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
    aanvraag.onreadystatechange = () => {
        if (aanvraag.readyState === 4 && aanvraag.status === 200) {
            let jsonText = aanvraag.responseText;
      
      
            let energie = JSON.parse(jsonText);

            let data = [];
            let labels = [];
            let serie1 = [];

            energie.forEach(meterstand => {
                labels.push(meterstand.datum);
                serie1.push(parseInt(meterstand.stand));
                
            });

            data["labels"] = labels;
            data["series"] = [serie1];

            


            maakGrafiek(data);
      
    }
  };

  // serveraanvraag specificeren
  aanvraag.open("GET", url, true);

  // aanvraag versturen
  aanvraag.send();

   // Hier komt de code die gegevens uit een JSON bestand gaat laden
  //maakGrafiek(data);
}




const maakGrafiek = (data) => {
    // Hier gaan we de chart maken
    new Chartist.Line('#grafiek', data);

}

// Wacht tot de pagina is geladen, dan pas de startGrafiek functie uitvoeren
window.addEventListener('DOMContentLoaded', startGrafiek);