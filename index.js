
const fetch = require('node-fetch')

const http = require('http')

fetch('https://boi.org.il/PublicApi/GetExchangeRates')
    .then(res => res.text())
    .then(text => http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(text);
        res.end();
      }).listen(8080)
);

/*

fetch('https://1283062.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1225&deploy=1&compid=1283062&h=48ae59709f4214ef3232')
    .then(res => res.text())
    .then(text => console.log(text));



var data = {"exchangeRates":[{"key":"USD","currentExchangeRate":3.527,"currentChange":-0.1415628539071347678369195900,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"GBP","currentExchangeRate":4.2515,"currentChange":0.8970738306001851104729809900,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"JPY","currentExchangeRate":2.6972,"currentChange":0.0779191866721086416088456800,"unit":100,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"EUR","currentExchangeRate":3.7409,"currentChange":0.5942777239969882757878885700,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"AUD","currentExchangeRate":2.4202,"currentChange":2.3253847454760696769829189900,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"CAD","currentExchangeRate":2.6037,"currentChange":0.4591403657689636546029786200,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"DKK","currentExchangeRate":0.503,"currentChange":0.600,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"NOK","currentExchangeRate":0.3487,"currentChange":-1.4971751412429378531073446300,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"ZAR","currentExchangeRate":0.2098,"currentChange":1.6965584100824042656325739200,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"SEK","currentExchangeRate":0.3353,"currentChange":0.3291442250149611011370436900,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"CHF","currentExchangeRate":3.8005,"currentChange":1.0287628263065553724280929300,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"JOD","currentExchangeRate":4.9676,"currentChange":-0.1647976204831383898066642500,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"LBP","currentExchangeRate":0.0233,"currentChange":-0.4273504273504273504273504300,"unit":10,"lastUpdate":"2023-01-04T13:24:03.9204638Z"},{"key":"EGP","currentExchangeRate":0.1338,"currentChange":-6.3025210084033613445378151300,"unit":1,"lastUpdate":"2023-01-04T13:24:03.9204638Z"}]}

fetch('https://1283062.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1225&deploy=1&compid=1283062&h=48ae59709f4214ef3232', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    
    body: JSON.stringify({ "id": 78912 })
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))

*/



