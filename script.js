const countries = [
  { name: 'Algeria', code: 'dz' }, { name: 'Angola', code: 'ao' }, { name: 'Argentina', code: 'ar' },
  { name: 'Australia', code: 'au' }, { name: 'Bangladesh', code: 'bd' }, { name: 'Brazil', code: 'br' },
  { name: 'Canada', code: 'ca' }, { name: 'China', code: 'cn' }, { name: 'France', code: 'fr' },
  { name: 'Germany', code: 'de' }, { name: 'India', code: 'in' }, { name: 'Indonesia', code: 'id' },
  { name: 'Japan', code: 'jp' }, { name: 'Kenya', code: 'ke' }, { name: 'Mexico', code: 'mx' },
  { name: 'Nigeria', code: 'ng' }, { name: 'Russia', code: 'ru' }, { name: 'South Africa', code: 'za' },
  { name: 'United Kingdom', code: 'gb' }, { name: 'United States', code: 'us' }
];

const countryListDiv = document.getElementById('country-list');
countries.forEach(country => {
  const card = document.createElement('div');
  card.className = 'country-card';
  card.innerHTML = `<img src="https://flagcdn.com/w320/${country.code}.png" alt="${country.name}"><p>${country.name}</p>`;
  countryListDiv.appendChild(card);
});

document.getElementById('prediction-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const pm25 = parseFloat(document.getElementById('pm25').value);
  const pm10 = parseFloat(document.getElementById('pm10').value);
  const no2 = parseFloat(document.getElementById('no2').value);
  const so2 = parseFloat(document.getElementById('so2').value);
  const co = parseFloat(document.getElementById('co').value);
  const o3 = parseFloat(document.getElementById('o3').value);
  const aqi = (pm25 * 0.4 + pm10 * 0.3 + no2 * 0.1 + so2 * 0.1 + co * 0.05 + o3 * 0.05).toFixed(2);
  document.getElementById('result').innerHTML = `<h3>Predicted AQI: ${aqi}</h3>`;
});