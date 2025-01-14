import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherConditions',

  props: {
    weather: {
      type: Object,
      required: true,
    },
  },

  setup(){
    const conditionIcons= WeatherConditionIcons;

    return {
      conditionIcons,
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon"
           :title="weather.current.weather.description"
      >
        {{ conditionIcons[weather.current.weather.id] }}
      </div>
      <div class="weather-conditions__temp">{{ (weather.current.temp - 273.15).toFixed(1) }} °C</div>
    </div>
  `,
})
