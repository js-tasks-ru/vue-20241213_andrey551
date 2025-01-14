import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCity',

  props: {
    weather: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ weather.geographic_name }}
      </h2>
      <div class="weather-card__time">
        {{ weather.current.dt }}
      </div>
    </div>
  `,
})
