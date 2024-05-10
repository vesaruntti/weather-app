import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IWeatherState {
  conditionText: string;
  conditionIcon: string;
  feelsLikeC: string;
  feelsLikeF: string;
  humidity: string;
  lastUpdated: string;
  pressureIn: string;
  pressureMb: string;
  temperatueC: string;
  temperatueF: string;
  uv: string;
  windKph: string;
  windMph: string;
  country: string;
  lat: string;
  lon: string;
  localTime: string;
  name: string;
  region: string;
  landmass: string;
  sunrise: string;
  sunset: string;
  forecast: [];
}

const initialState: IWeatherState = {
  conditionText: '----',
  conditionIcon: '',
  feelsLikeC: '0',
  feelsLikeF: '0',
  humidity: '0',
  lastUpdated: '',
  pressureIn: '0',
  pressureMb: '0',
  temperatueC: '0',
  temperatueF: '0',
  uv: '0',
  windKph: '0',
  windMph: '0',
  country: '',
  lat: '',
  lon: '',
  localTime: '',
  name: '',
  region: '',
  landmass: '',
  sunrise: '',
  sunset: '',
  forecast: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<object>) => {
      const payload: any = action.payload;
      state.conditionText = payload.current.condition.text;
      state.conditionIcon = payload.current.condition.icon;
      state.feelsLikeC = payload.current.feelslike_c;
      state.feelsLikeF = payload.current.feelslike_f;
      state.humidity = payload.current.humidity;
      state.lastUpdated = payload.current.last_updated;
      state.pressureIn = payload.current.pressure_in;
      state.pressureMb = payload.current.pressure_mb;
      state.temperatueC = payload.current.temp_c;
      state.temperatueF = payload.current.temp_f;
      state.uv = payload.current.uv;
      state.windKph = payload.current.wind_kph;
      state.windMph = payload.current.wind_mph;
      state.country = payload.location.country;
      state.lat = payload.location.lat;
      state.lon = payload.location.lon;
      state.localTime = payload.location.localtime;
      state.name = payload.location.name;
      state.region = payload.location.region;
      state.landmass = payload.location.tz_id;
      state.sunrise = payload.forecast.forecastday[0].astro.sunrise;
      state.sunset = payload.forecast.forecastday[0].astro.sunset;
      state.forecast = payload.forecast.forecastday;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
