<template>
  <section
    id="characters"
    class="bg-dark text-white py-5"
  >
    <div class="container">
      <div
        class="row justify-content-center align-items-center text-center text-lg-start"
        :class="{ 'flex-row-reverse': isReverse }"
      >
        <div class="col-12 col-lg-4">
          <CharacterCarousel
            :type="characterType.key"
            :items="characterSubtype"
          />
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0">
          <div class="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
            <img
              :src="`images/character-types-icons/${characterType.image}`"
              class="character-type-icon"
              :alt="characterType.name"
            >
            <h2 class="display-6 fw-bold text-uppercase">
              {{ characterType.name }}s
            </h2>
          </div>
          <p class="lead mt-4">
            {{ characterType.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CharacterCarousel from '@/components/characters/CharacterCarousel.vue'

export default {
  name: 'CharacterSubtype',

  components: {
    CharacterCarousel
  },

  props: {
    isReverse: {
      type: Boolean,
      default: false
    },
    characterType: {
      type: Object,
      default: () => {}
    },
    characterSubtype: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.character-type-icon {
  width: 50px;
  height: 50px;
}
</style>