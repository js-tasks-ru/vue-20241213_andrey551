import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherDetails',

  props: {
    weatherCurrent: {
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
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ Math.round(weatherCurrent.pressure * 0.75) }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ weatherCurrent.humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ weatherCurrent.clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ weatherCurrent.wind_speed}}</div>
      </div>
    </div>
  `,
})
