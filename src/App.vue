<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <Banner />
      <Choice />
      <Characters />
      <Explore />
      <StarterPacks />
    </main>

    <Copyright />
  </div>
</template>

<script setup>
import Navbar from '@/components/core/Navbar.vue'
import Banner from '@/components/home/Banner.vue'
import Choice from '@/components/home/Choice.vue'
import Characters from '@/components/home/Characters.vue'
import Explore from '@/components/home/Explore.vue'
import StarterPacks from '@/components/home/StarterPacks.vue'
import Copyright from '@/components/core/Copyright.vue'
</script>