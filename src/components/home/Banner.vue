<template>
  <section class="banner overflow-hidden position-relative">
    <video
      class="h-100 object-fit-cover position-absolute start-0 top-0 w-100"
      autoplay
      loop
      muted
      playsinline
    >
      <source
        src="/videos/banner.mp4"
        type="video/mp4"
      >
    </video>

    <div
      class="container d-flex flex-column justify-content-center align-items-center text-center h-100 text-white"
    >
      <img
        class="z-1 banner-logo"
        src="/images/LostArkLogo.webp"
        alt="Lost Ark Logo"
      >
      <p class="lead fw-bold py-3 px-5 text-uppercase banner-paragraph">
        Free to Play MMORPG
      </p>
      <div class="d-flex gap-2">
        <a
          href="https://store.steampowered.com/app/1599340/Lost_Ark/"
          target="_blank"
          class="btn btn-primary btn-lg text-uppercase fw-bold"
          title="External link to play now"
        >
          <i
            class="iconify"
            data-icon="bi:steam"
          />
          Play now
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

    <ShapeBanner class="banner-shape" />
  </section>
</template>

<script>
import ShapeBanner from '../shapes/ShapeBanner.vue'

export default {
  name: 'Banner',

  components: {
    ShapeBanner
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 900px;

  @media (max-width: 991px) {
    height: 600px;
  }

  video {
    z-index: -1;
  }

  &-logo {
    margin-bottom: -15px;
    width: 50%;

    @media (max-width: 991px) {
      width: 80%;
    }
  }

  &-paragraph {
    background-image: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.35) 10%,
      rgba(0, 0, 0, 0.35) 90%,
      transparent
    );
    border-image: linear-gradient(
      90deg,
      rgba(191, 162, 81, 0),
      #bfa251,
      rgba(191, 162, 81, 0)
    );
    border-image-slice: 1;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  &-shape {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>