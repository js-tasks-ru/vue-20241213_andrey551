import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    weatherAlert: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ weatherAlert.sender_name }}: {{ weatherAlert.description }}.</span>
    </div>
  `,
})
