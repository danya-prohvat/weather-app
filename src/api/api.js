import * as axios from "axios";

const API_KEY = '026f9b1efebfbd75fe6377f32a3e1984'

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});



export const weatherAPI = {
    getTodayWeather(location)  {
            return instance.get(`weather?q=${location},UA&lang=ru&units=metric&appid=${API_KEY}`)
                .then(response => response.data)
    },
    getWeekWeather(location)  {
        return instance.get(`forecast/?q=${location},UA&lang=ru&units=metric&cnt=9&appid=${API_KEY}`)
            .then(response => response.data)
    }
}