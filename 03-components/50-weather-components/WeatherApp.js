import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherAlert from './WeatherAlert.js';
import WeatherCity from './WeatherCity.js';
import WeatherConditions from './WeatherConditions.js';
import WeatherDetails from './WeatherDetails.js';

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherDetails,
    WeatherAlert,
    WeatherCity,
    WeatherConditions,
  },

  setup(){
    const weatherData = getWeatherData();
    const conditionIcons= WeatherConditionIcons;

    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    }

    const timeToComparison = (current) => {
      const dt = timeToMinutes(current.dt);
      const sunrise = timeToMinutes(current.sunrise);
      const sunset = timeToMinutes(current.sunset);

      return dt < sunrise && dt < sunset;
    }

    return {
      weatherData,
      conditionIcons,
      timeToComparison,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
          <li
            v-for="weather in weatherData"
            class="weather-card"
            :class="{ 'weather-card--night': timeToComparison(weather.current) }"
          >
            <WeatherAlert v-if="weather.alert" :weather-alert="weather.alert"/>
            <WeatherCity :weather="weather"/>
            <WeatherConditions :weather="weather"/>
            <WeatherDetails :weather-current="weather.current"/>
          </li>
      </ul>
    </div>
  `,
})
