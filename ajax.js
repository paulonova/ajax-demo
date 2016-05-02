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
}

request.open('GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();
