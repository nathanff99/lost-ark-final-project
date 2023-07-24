<template>
  <section
    id="your-choice"
    class="choice bg-dark text-white py-5"
  >
    <div class="container">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-lg-8">
          <h2 class="display-6 fw-bold text-uppercase">
            How do you choose to fight?
          </h2>
          <img
            class="mt-2 mb-4"
            src="/images/divider.webp"
            alt="Lost Ark Divider"
          >
          <p class="lead">
            In Lost Ark, choosing your class is one of the most crucial steps to
            ensure success in the epic battles that await you. Each class offers
            a unique combat style and special abilities, allowing you to become
            a truly powerful hero on your journey.
          </p>

          <div class="d-flex justify-content-center my-5 gap-5 flex-wrap">
            <div
              v-for="(item, index) in characterTypes"
              :key="`type-icon-${index}`"
              class="character-type"
            >
              <img
                :src="`/images/character-types-icons/${item.image}`"
                class="character-type-icon"
                :alt="item.name"
              >
              <h5 class="mt-2">
                {{ item.name }}s
              </h5>
            </div>
          </div>

          <div class="d-flex justify-content-center gap-2">
            <a
              href="#characters"
              class="btn btn-outline-primary btn-lg text-uppercase fw-bold"
              title="See more details about characters"
            >
              See more
            </a>
            <a
              href="#starter-packs"
              class="btn btn-outline-light btn-lg text-uppercase fw-bold"
              title="All starter packs"
            >
              Buy starter pack
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CHARACTER_TYPES } from '@/data/types.js'

export default {
  name: 'Choice',

  data() {
    return {
      characterTypes: CHARACTER_TYPES
    }
  }
}
</script>

<style lang="scss" scoped>
.choice {
  .character-type {
    &-image {
      height: 380px;
    }

    &-icon {
      width: 50px;
      height: 50px;
    }
  }
}
</style>