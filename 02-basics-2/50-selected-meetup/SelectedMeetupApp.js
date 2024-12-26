import {defineComponent, ref, watch, onMounted} from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedValue = ref(1);
    const isLoading = ref(false);
    const isError = ref(false);
    const meetup = ref(null);

    const fetchMeetup = async() => {
      try {
        isLoading.value = true;
        isError.value = false;

        meetup.value = await getMeetup(Number(selectedValue.value));
      } catch (e) {
        console.error(e)
        isError.value = true;
      } finally {
        isLoading.value = false;
      }
    }

    onMounted(() => {
      fetchMeetup();
    })

    watch(() => selectedValue.value, () => fetchMeetup());

    return {
      selectedValue,
      isLoading,
      isError,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary"
                type="button"
                :disabled="selectedValue == 1"
                @click="selectedValue--"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="1"
              v-model="selectedValue"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="2"
              v-model="selectedValue"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="3"
              v-model="selectedValue"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="4"
              v-model="selectedValue"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="5"
              v-model="selectedValue"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button class="button button--secondary"
                type="button"
                :disabled="selectedValue == 5"
                @click="selectedValue++"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title" v-if="meetup && !isLoading">{{ meetup.title }}</h1>
          <h1 class="meetup-cover__title" v-if="isLoading">Загрузка...</h1>
          <h1 class="meetup-cover__title" v-if="isError">Произошла ошибка, попробуйте перезагрузить страницу.</h1>
        </div>
      </div>

    </div>
  `,
})
