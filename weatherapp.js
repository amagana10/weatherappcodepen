const myform = document.getElementById("form");
var weatherCon = document.getElementById("weather");
var btn = document.getElementById("btn");



btn.addEventListener("click", function() {
  var text = document.getElementById("city");
  var request = new XMLHttpRequest();
  var url = 'https://api.openweathermap.org/data/2.5/weather?q='+text.value+'&appid=1ee28515bae1fee5d7ac286938be217f&units=imperial';
  
  request.open('GET',url,true);
  request.onload = function () {
    if (request.readyState === request.DONE) {
        if (request.status === 200) {
          console.log(request.responseText);
            var info = JSON.parse(request.responseText);
            renderHTML(info);
        }
    }
};
  request.send(null);
  renderHTML(request);
});

var count = 1;
function renderHTML(data){
  weatherCon.innerHTML = "";
  var htmlString = "";
  
  htmlString += data.name + ": " + data.weather[0].description + "<br>";
  
  htmlString += "Temperature: " + data.main.temp + " \u00B0 F<br>";
  
  htmlString += "Coord: " + data.coord.lon + ", "+data.coord.lat;
  weatherCon.insertAdjacentHTML("beforeend",htmlString);
  
}
