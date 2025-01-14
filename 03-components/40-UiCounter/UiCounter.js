import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    }
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    function handleDecrement() {
      const newCount = props.count - 1;
      emit('update:count', newCount);
    }

    function handleIncrement() {
      const newCount = props.count + 1;
      emit('update:count', newCount);
    }

    return {
      handleDecrement,
      handleIncrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        @click="handleDecrement"
        :disabled="count === min"
      >
        ➖
      </UiButton>

      <span class="count" data-testid="count">{{ count }}</span>

      <UiButton
        aria-label="Increment"
        @click="handleIncrement"
        :disabled="count === max"
      >
        ➕
      </UiButton>
    </div>
  `,
})
