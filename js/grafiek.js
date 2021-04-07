
const startGrafiek = () => {
   
  laadJSON2("data.json")
}

const laadJSON2 = (url) => {
    // het XMLHttpRequest object maken
    const aanvraag = new XMLHttpRequest();
  
    // Omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
    aanvraag.onreadystatechange = () => {
      if (aanvraag.readyState === 4 && aanvraag.status === 200) {
        let jsonText = aanvraag.responseText;
        data = JSON.parse(jsonText);
        maakGrafiek(data);
        // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO
      }
    };
  
    // serveraanvraag specificeren
    aanvraag.open("GET", url, true);
  
    // aanvraag versturen
    aanvraag.send();
};

const maakGrafiek = (data) => {
    new Chartist.Bar('#grafiek', data);

}

// Wacht tot de pagina is geladen, dan pas de startGrafiek functie uitvoeren
window.addEventListener('DOMContentLoaded', startGrafiek);