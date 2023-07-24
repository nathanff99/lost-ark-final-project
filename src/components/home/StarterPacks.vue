<template>
  <section
    id="starter-packs"
    class="starter-packs bg-dark text-white py-5"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center mb-5">
          <h2 class="display-6 fw-bold text-uppercase">
            Start your journey in the best way
          </h2>
          <img
            class="mt-2"
            src="/images/divider.webp"
            alt="Lost Ark Divider"
          >
        </div>

        <div
          v-for="(item, index) in items"
          :key="`pack-${index}`"
          class="col-md-6 col-lg-3 mb-4"
        >
          <div class="bg-black border-0 card h-100 text-white">
            <img
              :src="`/images/packs/${item.key}.webp`"
              class="card-img-top img-fluid"
              :alt="item.name"
            >
            <div
              class="card-body text-center"
              :class="`card-${item.key}`"
            >
              <h3 class="card-title">
                {{ item.name }}
              </h3>
              <h4>CAD {{ item.price }}</h4>
              <a
                :href="item.href"
                target="_blank"
                class="btn text-white text-uppercase fw-bold my-3"
                :class="`btn-${item.key}`"
                :title="`Buy pack ${item.name} on Steam`"
              >
                <i
                  class="iconify"
                  data-icon="bi:steam"
                />
                Buy on Steam
              </a>
              <ul class="list-unstyled">
                <li
                  v-for="(feature, indexF) in item.features"
                  :key="`feature-${indexF}`"
                >
                  &bull; {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { STARTER_PACKS } from '@/data/packs.js'

export default {
  name: 'StarterPacks',

  data() {
    return {
      items: STARTER_PACKS
    }
  }
}
</script>

<style lang="scss" scoped>
.starter-packs {
  .card {
    &-mokoko {
      background-image: radial-gradient(
        circle at 50% -80px,
        #3b693d -40px,
        rgba(20, 20, 20, 0.75) 200px
      ) !important;
    }
    &-shandi {
      background-image: radial-gradient(
        circle at 50% -80px,
        #800c00 -40px,
        rgba(20, 20, 20, 0.75) 200px
      ) !important;
    }
    &-thirain {
      background-image: radial-gradient(
        circle at 50% -80px,
        #5d3f1e -40px,
        rgba(20, 20, 20, 0.75) 200px
      ) !important;
    }
  }

  .btn {
    &-mokoko {
      background-color: #3b693d !important;
      border-color: #3b693d !important;
    }
    &-shandi {
      background-color: #800c00 !important;
      border-color: #800c00 !important;
    }
    &-thirain {
      background-color: #5d3f1e !important;
      border-color: #5d3f1e !important;
    }
  }
}
</style>