import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const selectedOperator = ref(null);
    const firstOperand = ref(null);
    const secondOperand = ref(null);

    const calculationResult = computed(() => {
      switch (selectedOperator.value) {
        case 'sum':
          return firstOperand.value + secondOperand.value;
        case 'subtract':
          return firstOperand.value - secondOperand.value;
        case 'multiply':
          return firstOperand.value * secondOperand.value;
        case 'divide':
          if (secondOperand.value !== 0) {
            return firstOperand.value / secondOperand.value;
          }
          return 0;
      }});

    return {
      selectedOperator,
      calculationResult,
      firstOperand,
      secondOperand,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="selectedOperator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="selectedOperator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="selectedOperator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="selectedOperator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand" />

      <div>=</div>

      <output>{{ calculationResult }}</output>
    </div>
  `,
})
