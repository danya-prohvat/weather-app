import {weatherAPI} from "../api/api";

const SET_TODAY_WEATHER = 'SET_TODAY_WEATHER';
const SET_CURRENT_LOCATION = 'SET-CURRENT-LOCATION';
const CHANGE_CURRENT_SEARCH_VALUE = 'CHANGE-CURRENT-SEARCH-VALUE';
const SEARCH_SIMILAR_CITIES = 'SEARCH-SIMILAR-CITIES';

const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const ukrCities = ['Белгород Днестровский',
    'Белосарайская коса',
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
    'Ивано Франковск',
    'Ивано',
    'Ильичевск',
    'Каменец Подольский',
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
    }
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
                    dayOfWeek: daysOfWeek[dayOfWeek - 1],
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
        default:
            return state;
    }

}
export const setTodayWeatherCreator = (weather) => ({type: SET_TODAY_WEATHER, weather})
export const setCurrentLocationCreator = (city) => ({type: SET_CURRENT_LOCATION, city})
export const changeCurrentSearchValueCreator = (value) => ({type: CHANGE_CURRENT_SEARCH_VALUE, value})
export const searchSimilarCitiesCreator = (clear) => ({type: SEARCH_SIMILAR_CITIES, clear})


export const getTodayWeather = (location) => async (dispatch) => {
    try {
        let response = await weatherAPI.getTodayWeather(location);
        if (response) {
            dispatch(setTodayWeatherCreator({
                description: response.weather[0].main,
                temperature: Math.round(response.main.temp),
                clouds: response.clouds.all,
                weatherIcon: response.weather[0].icon,
            }));
        }
    }catch (e) {
        console.log(e)
    }
}


export default weatherReducer;
