<template>
  <section
    id="explore"
    class="explore text-white py-5 d-flex"
  >
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row text-center justify-content-center align-items-center">
        <div class="col-lg-8">
          <h2 class="display-6 fw-bold text-uppercase mb-4">
            Explore without limits
          </h2>
          <p class="lead">
            There’s something for everyone in the immense world of Lost Ark.
            Choose from diverse advanced classes, swap as you go to change your
            style and experience. Explore seven continents, hundreds of islands,
            and all the seas between them. Engage with interesting and varied
            cultures, befriend or battle magnificent beasts, and dive into
            immersive lore.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Explore'
}
</script>

<style lang="scss" scoped>
.explore {
  background-image: url(/images/bg-about.webp);
  height: 900px;

  @media (max-width: 991px) {
    background-position: -300px 100%;
  }
}
</style>