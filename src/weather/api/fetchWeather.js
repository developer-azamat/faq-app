import axios from 'axios'


const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_key= 'dd9c7f6891e41e5a2877a8c9636d3efa'

export const fetchWeather = async (query)=>{
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: API_key,
        }
    })
    return data;
}