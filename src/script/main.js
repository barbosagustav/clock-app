fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const userIP = data.ip;

    fetch(`https://freegeoip.app/json/${userIP}`)
      .then(response => response.json())
      .then(data => {
        const country = data.country_name;
        console.log(`País do usuário: ${country}`);
      })
      .catch(error => {
        console.error('Erro ao obter informações de geolocalização:', error);
      });
  })
  .catch(error => {
    console.error('Erro ao obter endereço IP:', error);
  });
