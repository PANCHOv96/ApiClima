import axios from 'axios';

const apiKey = '85e6757c938f526630fd706cc7634793'

function getApiClima(ciudad){
    if(ciudad){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(resp => {
            resp.data.main.temp_max = (resp.data.main.temp_max - 273.15).toFixed(2);
            resp.data.main.temp_min = (resp.data.main.temp_min - 273.15).toFixed(2);
            return resp.data
        })
        .catch(error => {
        throw error.response.data.message
        })
    }
}

export default getApiClima;