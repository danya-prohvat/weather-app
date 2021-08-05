import {weatherAPI} from "../api/api";

const SET_TODAY_WEATHER = 'SET_TODAY_WEATHER';
const SET_CURRENT_LOCATION = 'SET-CURRENT-LOCATION';
const CHANGE_CURRENT_SEARCH_VALUE = 'CHANGE-CURRENT-SEARCH-VALUE';
const SEARCH_SIMILAR_CITIES = 'SEARCH-SIMILAR-CITIES';
const SET_TEMPERATURE_UNIT = 'SET-TEMPERATURE-UNIT';
const SET_HOURLY_WEATHER_FORECAST = 'SET-HOURLY-WEATHER-FORECAST';
const SET_TODAY_INDICATORS = 'SET-TODAY-INDICATORS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const ukrCities = [
    'Бердянск',
    'Борисполь',
    'Буковель',
    'Верховина',
    'Винница',
    'Воловец',
    'Ворохта',
    'Днепропетровск',
    'Долина',
    'Донецк',
    'Драгобрат',
    'Ждениево',
    'Житомир',
    'Закарпатье',
    'Запорожье',
    'Ивано',
    'Ильичевск',
    'Затока',
    'Киев',
    'Кирилловка',
    'Кировоград',
    'Коблево',
    'Ковель',
    'Косов',
    'Кременчуг',
    'Кривой Рог',
    'Кузнецовск',
    'Луганск',
    'Луцк',
    'Львов',
    'Мариуполь',
    'Мелекино',
    'Мелитополь',
    'Миргород',
    'Моршин',
    'Мукачево',
    'Николаев',
    'Одесса',
    'Пилипец',
    'Полтава',
    'Поляна',
    'Приморск',
    'Ровно',
    'Святогорск',
    'Седово',
    'Славское',
    'Славянск',
    'Соледар',
    'Солочин',
    'Сумы',
    'Сходница',
    'Тернополь',
    'Трускавец',
    'Ужгород',
    'Урзуф',
    'Харьков',
    'Херсон',
    'Хмельник',
    'Хмельницкий',
    'Черкассы',
    'Чернигов',
    'Черновцы',
    'Щурово',
    'Яремча',
    'Ясиня',];

let initialState = {
    temperatureUnit: 'C',
    currentLocation: 'Винница',
    isFetching: false,
    searchData: {
        currentSearchValue: '',
        similarCityList: [],
    },
    todayData: {
        time: '',
        dayOfWeek: '',
    },
    todayWeather: {
        description: '',
        temperature: null,
        clouds: '',
    },
    todayIndicators: {
        humidity: null,
        pressure: null,
        sunData: {
            sunrise: null,
            sunset: null,
        },
        temperatureData: {
            temp_min: null,
            temp_max: null,
        },
        visibilityData: {
            visibility: null,
            visibilityDescription: '',
        },
        windData: {
            wind: null,
            windDirection: '',
        },
    },
    hourlyWeatherForecast: [
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
        {time: '', weatherIcon: '', temp: ''},
    ]
};


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODAY_WEATHER: {
            let todayData = new Date();
            let hours = todayData.getHours() < 10 ? '0' + todayData.getHours() : todayData.getHours();
            let minutes = todayData.getMinutes() < 10 ? '0' + todayData.getMinutes() : todayData.getMinutes();
            let dayOfWeek = todayData.getDay();
            return {
                ...state,
                todayData: {
                    ...state.todayData,
                    time: `${hours}:${minutes}`,
                    dayOfWeek: daysOfWeek[dayOfWeek],
                },
                todayWeather: {
                    ...state.todayWeather,
                    description: action.weather.description,
                    temperature: action.weather.temperature,
                    clouds: action.weather.clouds,
                    weatherIcon: action.weather.weatherIcon,
                }
            };
        }
        case SET_CURRENT_LOCATION: {
            return {
                ...state,
                currentLocation: action.city,
                searchData: {
                    ...state.searchData,
                    currentSearchValue: '',
                }
            };
        }
        case CHANGE_CURRENT_SEARCH_VALUE: {
            return {
                ...state,
                searchData: {
                    ...state.searchData,
                    currentSearchValue: action.value.trimStart(),
                }
            };
        }
        case SEARCH_SIMILAR_CITIES: {
            const similarCitiesList = ukrCities.filter(el => el.toLowerCase().slice(0, state.searchData.currentSearchValue.trim().length) == state.searchData.currentSearchValue.trim().toLowerCase());
            return {
                ...state,
                searchData: {
                    ...state.searchData,
                    similarCityList: action.clear ? [] : similarCitiesList,
                }
            };
        }
        case SET_TEMPERATURE_UNIT: {
            return {
                ...state,
                temperatureUnit: action.unit,
            };
        }
        case SET_HOURLY_WEATHER_FORECAST: {
            return {
                ...state,
                hourlyWeatherForecast: state.hourlyWeatherForecast.map((el, ind) => {
                    const time = +action.list[ind].dt_txt.slice(11, 13) + action.list[ind].dt_txt.slice(13, 16);
                    return {
                        ...el,
                        weatherIcon: action.list[ind].weather[0].icon,
                        temp: Math.round(action.list[ind].main.temp),
                        time: time
                    }
                })
            };
        }
        case SET_TODAY_INDICATORS: {
            let sunriseTime = new Date(action.indicators.sunrise * 1000);
            let sunsetTime = new Date(action.indicators.sunset * 1000);
            let visibility = Math.floor(action.indicators.visibility / 1000);
            let windDirection = '';
            if (action.indicators.windDeg >= 225 && action.indicators.windDeg < 315) windDirection = 'Запад';
            else if (action.indicators.windDeg >= 135 && action.indicators.windDeg < 225) windDirection = 'Юг';
            else if (action.indicators.windDeg >= 45 && action.indicators.windDeg < 135) windDirection = 'Восток';
            else windDirection = 'Север';

            return {
                ...state,
                todayIndicators: {
                    ...state.todayIndicators,
                    humidity: action.indicators.humidity,
                    pressure: Math.round(action.indicators.pressure / 10),
                    sunData: {
                        sunrise: sunriseTime.getHours() + ':' + (sunriseTime.getMinutes() < 10 ? '0' + sunriseTime.getMinutes() : sunriseTime.getMinutes()),
                        sunset: sunsetTime.getHours() + ':' + (sunsetTime.getMinutes() < 10 ? '0' + sunsetTime.getMinutes() : sunsetTime.getMinutes()),
                    },
                    temperatureData: {
                        temp_min: Math.min(...state.hourlyWeatherForecast.map(el => el.temp)),
                        temp_max: Math.max(...state.hourlyWeatherForecast.map(el => el.temp)),
                    },
                    visibilityData: {
                        visibility: visibility,
                        visibilityDescription: visibility < 10 ? 'Плохая видимость' : 'Хорошая видимость',
                    },
                    windData: {
                        wind: action.indicators.windSpeed.toFixed(1),
                        windDirection: windDirection,
                    },
                }
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.bool,
            };
        }
        default:
            return state;
    }
}

export const setTodayWeatherCreator = (weather) => ({type: SET_TODAY_WEATHER, weather})
export const setCurrentLocationCreator = (city) => ({type: SET_CURRENT_LOCATION, city})
export const changeCurrentSearchValueCreator = (value) => ({type: CHANGE_CURRENT_SEARCH_VALUE, value})
export const searchSimilarCitiesCreator = (clear) => ({type: SEARCH_SIMILAR_CITIES, clear})
export const setTemperatureUnitCreator = (unit) => ({type: SET_TEMPERATURE_UNIT, unit})
export const setHourlyWeatherForecastCreator = (list) => ({type: SET_HOURLY_WEATHER_FORECAST, list})
export const setTodayIndicatorsCreator = (indicators) => ({type: SET_TODAY_INDICATORS, indicators})
export const toggleIsFetchingCreator = (bool) => ({type: TOGGLE_IS_FETCHING, bool})

export const getWeather = (location, temperatureUnit) => async (dispatch) => {
    try {
        dispatch(toggleIsFetchingCreator(true));

        let requests = [
            await weatherAPI.getHourlyWeather(location, temperatureUnit),
            await weatherAPI.getTodayWeather(location, temperatureUnit),
            await weatherAPI.getSomeTodayIndicators(location)
        ];

        Promise.all(requests)
            .then(weatherData => {
                dispatch(setHourlyWeatherForecastCreator(weatherData[0].list));
                dispatch(setTodayWeatherCreator({
                    description: weatherData[1].weather[0].main,
                    temperature: Math.round(weatherData[1].main.temp),
                    clouds: weatherData[1].clouds.all,
                    weatherIcon: weatherData[1].weather[0].icon,
                }));
                dispatch(setTodayIndicatorsCreator({
                    humidity: weatherData[2].main.humidity,
                    pressure: weatherData[1].main.pressure,
                    visibility: weatherData[1].visibility,
                    temp_max: weatherData[1].main.temp_max,
                    temp_min: weatherData[1].main.temp_min,
                    sunrise: weatherData[1].sys.sunrise,
                    sunset: weatherData[1].sys.sunset,
                    windSpeed: weatherData[2].wind.speed,
                    windDeg: weatherData[2].wind.deg,
                }));
            })
            .catch(e => console.log(e))

        dispatch(toggleIsFetchingCreator(false));
    } catch (e) {
        alert('Ошибка сети');
        console.log(e)
    }
}


export default weatherReducer;
