import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(new Date().toLocaleTimeString());
    let interval

    onMounted(() => {
      interval = setInterval(() => {
        time.value = new Date().toLocaleTimeString()
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(interval)
    })

    return {
      time
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
