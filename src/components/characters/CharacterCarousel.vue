<template>
  <div
    :id="`carousel-${type}`"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators top-100">
      <button
        v-for="(item, index) in items"
        :key="`indicator-${index}`"
        :class="{ active: index === 0 }"
        type="button"
        :data-bs-target="`#carousel-${type}`"
        :data-bs-slide-to="index"
        aria-current="true"
        :aria-label="item.name"
      />
    </div>

    <div class="carousel-inner">
      <div
        v-for="(item, index) in items"
        :key="`item-${index}`"
        class="carousel-item"
        :class="{ active: index === 0 }"
        data-bs-interval="3000"
      >
        <img
          :src="`images/character-subtypes/${type}/${item.image}`"
          class="w-100 object-fit-contain character-subtype-image"
          :alt="item.name"
        >
        <div class="carousel-caption bottom-0">
          <img
            :src="`images/character-subtypes-icons/${type}/${item.image}`"
            class="character-subtype-icon"
            :alt="item.name"
          >
          <h5>{{ item.name }}</h5>
        </div>
      </div>
    </div>

    <button
      v-if="items.length > 1"
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#carousel-${type}`"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      v-if="items.length > 1"
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#carousel-${type}`"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CharacterCarousel',

  props: {
    type: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.character-subtype {
  &-image {
    height: 380px;
  }

  &-icon {
    width: 50px;
    height: 50px;
  }
}
</style>