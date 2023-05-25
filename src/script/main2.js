const country = document.querySelector('.country')
const abreviacao = document.querySelector('.abreviacao')
const hour = document.querySelector('.hour')
const greetings = document.querySelector('.greetings')
const body = document.querySelector('body')
const timeZone = document.querySelector('.time_zone')
const dayYear = document.querySelector('.day_year')
const dayWeek = document.querySelector('.day_week')
const weekNumber = document.querySelector('.week_number')
const iconGreetings = document.querySelector('.icon_greetings')


    // Obtém o IP do visitante usando uma API de terceiros


    // Fazendo uma requisição HTTP para obter o país com base no IP
      function obterPaisPorIP() {

        const url = 'http://ip-api.com/json/';
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const countryApi = data.country;
            const countryCodeApi = data.countryCode;
            
            country.innerHTML = countryApi + ',';
            abreviacao.innerHTML = countryCodeApi;
            timeZone.innerHTML = data.city + '/' + data.region;
          });
      }


      function getCurrentTime() {
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const userIP = data.ip;

          // Obtém a hora com base no IP do visitante usando a API do World Time
          fetch("http://worldtimeapi.org/api/ip")
          .then(function(resposta){
              return resposta.json();
          })
          .then(function(json)
          { 
            const apiTime = json.utc_datetime;
            const formattedTime = new Date(apiTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            hour.innerHTML = formattedTime;
            dayYear.innerHTML = json.day_of_year;
            dayWeek.innerHTML = json.day_of_week;
            weekNumber.innerHTML = json.week_number

            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12) {
                greetings.textContent = " GOOD MORNING, IT'S CURRENTLY" ;
              } else if (currentHour >= 12 && currentHour < 18) {
                greetings.textContent =  "GOOD AFTERNON, IT'S CURRENTLY";
                
              }
              else {
                greetings.textContent = "GOOD NIGHT, IT'S CURRENTLY"
                body.style.backgroundImage = "url('/src/images/desktop/bg-image-nighttime.jpg')";
                iconGreetings.src = "./src/images/desktop/icon-moon.svg"


              }
          })
        })
      }


      //Evento de click
const icon = document.querySelector('.icon')
const button = document.querySelector('button')
const navSession = document.querySelector('.nav')
const text = document.querySelector('.text')
const informSession = document.querySelector('.inform')
const container = document.querySelector('.container')


var isTabVisible = false;

function showTab() {
  if (isTabVisible) {
  informSession.style.display = 'none'
  text.style.display = 'block'
  container.style.height = '100%'
  //navSession.style.marginTop = '10vw'
  button.textContent = 'M o r e'
  isTabVisible = false;}
  else {
    informSession.style.display = 'block'
    text.style.display = 'none'
    container.style.height = '50%'
    //navSession.style.marginTop = '2em' 
    button.textContent = 'L e s s'
    isTabVisible = true;
  }
}

button.addEventListener('click', function(){
    showTab()
})


      setInterval(getCurrentTime, 1000)
      obterPaisPorIP();




