'use strict';
window.addEventListener('click', event => {
  if (event.target.closest('.header__user')) {
    document.querySelector('.aside').classList.add('active');
  }if (event.target.closest('.aside__cancel') || !event.target.closest('.header__user') && !event.target.closest('.aside')){
    document.querySelector('.aside').classList.remove('active');
  }
});
const body = document.querySelector('.body');
const bank = document.querySelector('.wrapper');
window.addEventListener('click', event => {
  if (event.target.closest('.aside__user_money')) {
    bank.classList.remove('hidden');
    body.classList.add('active');
  }
  if (!event.target.closest('.aside__user_money') && !event.target.closest('.wrapper')) {
    bank.classList.add('hidden');
    body.classList.remove('active');
  }
});
const searchWrapper = document.querySelector('#header__search');
window.addEventListener('click', event => {
  if (event.target.closest('.lupa')) {
    searchWrapper.classList.toggle('active');
  }
  if (!event.target.closest('.lupa') && !event.target.closest('#header__search')) {
    searchWrapper.classList.remove('active');
  }
});
let lat = 51.169392, lon = 71.449074; 
let airChart = null;
document.getElementById("search").addEventListener("input", updateCity);
document.getElementById("inputb").addEventListener("input", updateCity);
function updateCity() {
  let inputCity = this.value.toLowerCase();
  if (inputCity === 'астана' || inputCity === 'astana') {
    lat = 51.169392, lon = 71.449074;
  } else if (inputCity === 'алматы' || inputCity === 'almaty') {
    lat = 43.238949, lon = 76.889709;
  } else if (inputCity === 'тараз' || inputCity === 'taraz') {
    lat = 42.900000, lon = 71.366667;
  } else if (inputCity === 'шымкент' || inputCity === 'shymkent') {
    lat = 42.317300, lon = 69.590100;
  } else if (inputCity === 'актобе' || inputCity === 'aktobe') {
    lat = 50.294132, lon = 57.168107;
  } else if (inputCity === 'кызылорда' || inputCity === 'kyzylorda') {
    lat = 44.848831, lon = 65.482268;
  } else if (inputCity === 'костанай' || inputCity === 'kostanay') {
    lat = 53.219400, lon = 63.635400;
  } else if (inputCity === 'атырау' || inputCity === 'atyrau') {
    lat = 51.883333, lon = 59.233333;
  } else if (inputCity === 'актау' || inputCity === 'aktau') {
    lat = 47.116667, lon = 51.883333;
  } else if (inputCity === 'караганда' || inputCity === 'karaganda') {
    lat = 49.802667, lon = 73.102236;
  } else if (inputCity === 'павлодар' || inputCity === 'pavlodar') {
    lat = 52.285200, lon = 76.945200;
  } else if (inputCity === 'семей' || inputCity === 'semey') {
    lat = 50.411011, lon = 80.227524;
  } else if (inputCity === 'кокшетау' || inputCity === 'kokshetau') {
    lat = 54.874400, lon = 69.147400;
  } else if (inputCity === 'экибастуз' || inputCity === 'ekibastuz') {
    lat = 52.142444, lon = 74.497025;
  } else if (inputCity === 'рудный' || inputCity === 'rudny') {
    lat = 52.971657, lon = 63.116535;
  } else if (inputCity === 'туркестан' || inputCity === 'turkestan') {
    lat = 42.904722, lon = 71.379167;
  } else if (inputCity === 'усть-каменогорск' || inputCity === 'oskemen') {
    lat = 50.059245, lon = 82.925117;
  } else if (inputCity === 'талдыкорган' || inputCity === 'taldykorgan') {
    lat = 47.105622, lon = 81.914827;
  } else if (inputCity === 'темиртау' || inputCity === 'temirtau') {
    lat = 49.804000, lon = 73.109000;
  } else if (inputCity === 'жезказган' || inputCity === 'zhezkazgan') {
    lat = 50.284910, lon = 67.970940;
  } else if (inputCity === 'степногорск' || inputCity === 'stepnogorsk') {
    lat = 51.379722, lon = 71.892222;
  } else if (inputCity === 'балхаш' || inputCity === 'balkhash') {
    lat = 46.846698, lon = 74.995973;
  } else if (inputCity === 'жанаозен' || inputCity === 'zhanaozen') {
    lat = 45.714247, lon = 63.512489;
  } else if (inputCity === 'байконур' || inputCity === 'baikonur') {
    lat = 47.708300, lon = 67.733300;
  } else if (inputCity === 'жаркент' || inputCity === 'zharkent') {
    lat = 45.176720, lon = 78.405079;
  } else if (inputCity === 'щучинск' || inputCity === 'shchuchinsk') {
    lat = 54.876312, lon = 69.163934;
  } else if(inputCity === 'антарктида' || inputCity === 'antarktida') {
    lat = -77.3176, lon = 39.4210;
  }
  map.setView([lat, lon], 12);
  updateChart();
}
var map = L.map('map').setView([51.169392, 71.449074], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
var ecoPlaces = [
  // Астана
  { name: "Ботанический сад Астаны", lat: 51.0846, lon: 71.4255 },
  { name: "Центральный парк", lat: 51.1593, lon: 71.4581 },
  { name: "Парк Арай", lat: 51.1574, lon: 71.4054 },

  // Алматы
  { name: "Парк 28 гвардейцев-панфиловцев", lat: 43.2586, lon: 76.9532 },
  { name: "Ботанический сад Алматы", lat: 43.2206, lon: 76.9206 },
  { name: "Парк Кок-Тобе", lat: 43.2386, lon: 76.9485 },

  // Шымкент
  { name: "Парк Абая", lat: 42.3184, lon: 69.5985 },
  { name: "Парк Кен-Баба", lat: 42.2995, lon: 69.6183 },
  { name: "Экопарк Шымкента", lat: 42.3132, lon: 69.5908 },

  // Караганда
  { name: "Центральный парк Караганды", lat: 49.8255, lon: 73.0953 },
  { name: "Ботанический сад Караганды", lat: 49.8171, lon: 73.0882 },
  { name: "Озеро Федоровское", lat: 49.8021, lon: 73.0658 },

  // Актобе
  { name: "Центральный парк Актобе", lat: 50.2833, lon: 57.1667 },
  { name: "Парк Первого Президента", lat: 50.2810, lon: 57.1679 },
  { name: "Лесопарк Актобе", lat: 50.2952, lon: 57.1781 },

  // Тараз
  { name: "Центральный парк Тараза", lat: 42.8996, lon: 71.3763 },
  { name: "Парк Независимости", lat: 42.9050, lon: 71.3799 },
  { name: "Ботанический сад Тараза", lat: 42.9008, lon: 71.3801 },

  // Павлодар
  { name: "Центральный парк Павлодара", lat: 52.2994, lon: 76.9539 },
  { name: "Парк 'Городской сад'", lat: 52.3033, lon: 76.9534 },
  { name: "Набережная Иртыша", lat: 52.2961, lon: 76.9515 },

  // Усть-Каменогорск
  { name: "Центральный парк Оскемена", lat: 49.9857, lon: 82.6112 },
  { name: "Экопарк Оскемена", lat: 49.9833, lon: 82.6178 },
  { name: "Набережная Иртыша", lat: 49.9852, lon: 82.6039 },

  // Костанай
  { name: "Центральный парк Костаная", lat: 53.2061, lon: 63.6262 },
  { name: "Парк Победы", lat: 53.2148, lon: 63.6335 },
  { name: "Ботанический сад Костаная", lat: 53.2102, lon: 63.6297 },

  // Кызылорда
  { name: "Центральный парк Кызылорды", lat: 44.8488, lon: 65.5091 },
  { name: "Парк Независимости", lat: 44.8472, lon: 65.5083 },
  { name: "Зона отдыха 'Сырдарья'", lat: 44.8503, lon: 65.5107 },
];
var redIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32]
});
ecoPlaces.forEach(place => {
  L.marker([place.lat, place.lon], { icon: redIcon }).addTo(map)
    .bindPopup(`<b>${place.name}</b>`);
});
const divQuality = document.querySelector('.info-valuation');
const pQuality = document.querySelector('.quality-text');
const API_KEY = "491aa0781995c8bddbb25d3cd3a92a64";
async function getAirData() {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function updateChart() {
  const data = await getAirData();
  const airComponents = data.list[0].components;
  const airQualityIndex = data.list[0].main.aqi;
  if (airQualityIndex === 1) {
    divQuality.classList.remove('good', 'normal', 'bad');
    divQuality.classList.add('good');
    pQuality.textContent = '';
    pQuality.textContent = 'Good';
  } else if (airQualityIndex === 2) {
    divQuality.classList.remove('good', 'normal', 'bad');
    divQuality.classList.add('normal');
    pQuality.textContent = '';
    pQuality.textContent = 'Normal';
  } else if (airQualityIndex === 3){
    divQuality.classList.remove('good', 'normal', 'bad');
    divQuality.classList.add('bad');
    pQuality.textContent = '';
    pQuality.textContent = 'Bad';
  }
  if (airChart !== null) {
    airChart.destroy();
  }
  const ctx = document.getElementById("airChart").getContext("2d");
  airChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["PM2.5", "PM10", "CO", "NO2", "SO2", "O3"],
      datasets: [{
        data: [
          airComponents.pm2_5,
          airComponents.pm10,
          airComponents.co / 100,
          airComponents.no2,
          airComponents.so2,
          airComponents.o3
        ],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}
updateChart();