const hour = document.querySelector('.hour')

const ipUser = "https://api.ipify.org/?format=json"
const apiUser = "http://worldtimeapi.org/api/" ${visitorIpAddress}

fetch(ipUser)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var visitorIpAddress = data.ip;
  })


fetch(apiUser)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json)
        { 
            hour.innerHTML = json.timezone;
        })