<template>
  <section
    id="characters"
    class="characters bg-dark pb-5"
  >
    <CharacterSubtype
      v-for="(item, index) in characterTypes"
      :key="`subtype-${index}`"
      :character-type="item"
      :character-subtype="characterSubtypes[item.key]"
      :is-reverse="index % 2 !== 0"
    />
  </section>
</template>

<script>
import { CHARACTER_TYPES, CHARACTER_SUBTYPES } from '@/data/types.js'
import CharacterSubtype from '@/components/characters/CharacterSubtype.vue'

export default {
  name: 'Characters',

  components: {
    CharacterSubtype
  },

  data() {
    return {
      characterTypes: CHARACTER_TYPES,
      characterSubtypes: CHARACTER_SUBTYPES
    }
  }
}
</script>

<style>
</style>