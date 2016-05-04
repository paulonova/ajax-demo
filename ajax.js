// JavaScript
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// Vad är AJAX? 
// Det är inte ett fotbollslag...
// Det är inte ett diskmedel...
// Det är inte ett programmeringsspråk...

// ...det är en teknik, en kombination av saker, för att hämta data från URLs
// AJAX - Asynchronous JavaScript and XML

// Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function() {	

	console.log("Nånting hände!");

	if(request.readyState == 4 && request.status == 200) {
      // I variabeln res (response) finns det information...
      console.log("Vi hat fått ett svar!");
      console.log("Svaret (response) är " + request.responseText);
      
      // Spara texten i en variabel
      var data = request.responseText;
      document.write(data);
     }
 
}

request.open('GET', 'https://api.spotify.com/v1/users/hello'); 
request.send();
console.log("Sista raden i koden...");

// Ovan rad körs före loggen om att vi tagit emot ett svar
// Varför? Jo, anropet .send() är asynkront...
// ...koden kommer att köras parallellt (funktionen på rad 15 väntar i bakgrunden på att anropas)
// Jämför sms med telefon (sms asynkront, telefonsamtal är inte det - vi måste "lägga på" för ett nytt samtal).
// Vi behöver inte vänta på att en tidigare rad kod "är klar"

// Med AJAX kan vi uppdatera en hemsida med information från en server utan att hela sidan måste laddas om...
// T.ex. sl.se när man söker resor eller Google och autocomplete
// Vi hämtar bara den informationen vi behöver NÄR vi behöver den





