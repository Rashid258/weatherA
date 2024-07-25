// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '952f8b9b9dmshde43c48d73fdb96p1fcd42jsnf66e78667b73',
// 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };
// async function fetchWeather(city){
//     cityName.innerHTML = city;
//     try {
//         const response = await fetch(url+city, options);
//         const result = await response.json();
//         temp.innerHTML = result.current.temp_c;
//         condition1.innerHTML = result.current.condition.text;
//         w_speed1.innerHTML = result.current.wind_kph;
//         cityName.innerHTML = result.location.name;
//         temp_f.innerHTML = result.current.temp_f;
//         humidity1.innerHTML = result.current.humidity;
//         dew_point.innerHTML = result.current.dewpoint_c;
//         cloud.innerHTML = result.current.cloud;
//         heat_index.innerHTML = result.current.heatindex_c;
//         heat_index1.innerHTML = result.current.heatindex_f;
//         w_direction.innerHTML = result.current.wind_dir;
//         w_degree.innerHTML = result.current.wind_degree;
//         w_pressure.innerHTML = result.current.pressure_in;

//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// submit.addEventListener('click', (e)=>{
//     e.preventDefault()
//     fetchWeather(city.value)
// })
// fetchWeather('karachi');

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '952f8b9b9dmshde43c48d73fdb96p1fcd42jsnf66e78667b73',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

async function fetchWeather(city) {
  try {
    const response = await fetch(url + city, options);
    const result = await response.json();
    temp.innerHTML = result.current.temp_c;
    condition1.innerHTML = result.current.condition.text;
    w_speed1.innerHTML = result.current.wind_kph;
    cityName.innerHTML = result.location.name;
    temp_f.innerHTML = result.current.temp_f;
    humidity1.innerHTML = result.current.humidity;
    dew_point.innerHTML = result.current.dewpoint_c;
    cloud.innerHTML = result.current.cloud;
    heat_index.innerHTML = result.current.heatindex_c;
    heat_index1.innerHTML = result.current.heatindex_f;
    w_direction.innerHTML = result.current.wind_dir;
    w_degree.innerHTML = result.current.wind_degree;
    w_pressure.innerHTML = result.current.pressure_in;
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateWeatherData(cities) {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = ''; // Clear previous data

  for (const city of cities) {
    const data = await fetchWeather(city);
    if (data) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row" class="text-start">${data.location.name}</th>
        <td>${data.current.temp_c}</td>
        <td>${data.current.humidity}</td>
        <td>${data.current.wind_kph}</td>
        <td>${data.current.condition.text}</td>
      `;
      tableBody.appendChild(row);
    }
  }
}

document.getElementById('submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  await fetchWeather(city);
});

const cities = ['Karachi', 'Chishtian', 'Burewala', 'Islamabad', 'Faisalabad', 'Lahore'];
updateWeatherData(cities);