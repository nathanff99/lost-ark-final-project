<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50 fixed-top"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <a
        class="navbar-brand"
        href="#"
        title="Link to top"
      >
        <img
          src="/images/LostArkLogo.webp"
          alt="Lost Ark Logo"
        >
      </a>

      <div class="">
        <a
          href="https://store.steampowered.com/app/1599340/Lost_Ark/"
          target="_blank"
          class="btn btn-primary text-uppercase fw-bold d-lg-none me-2"
          title="External link to play now"
        >
          <i
            class="iconify"
            data-icon="bi:steam"
          />
          Play now
        </a>
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
      <div
        id="navbarMenu"
        class="offcanvas offcanvas-end bg-dark"
        tabindex="-1"
        aria-labelledby="navbarMenuLabel"
      >
        <div class="offcanvas-header justify-content-center navbar-brand">
          <img
            src="/images/LostArkLogo.webp"
            alt="Lost Ark Logo"
          >
          <button
            type="button"
            class="btn-close end-0 fs-2 lh-1 m-3 position-absolute text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="offcanvas-body justify-content-center">
          <ul class="navbar-nav text-center">
            <li
              v-for="(item, index) in items"
              :key="`link-${index}`"
              class="nav-item"
            >
              <a
                class="nav-link"
                :href="item.href"
                :title="`Link to ${item.name} section`"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-flex">
        <a
          href="https://store.steampowered.com/app/1599340/Lost_Ark/"
          target="_blank"
          class="btn btn-primary text-uppercase fw-bold"
          title="External link to play now"
        >
          <i
            class="iconify"
            data-icon="bi:steam"
          />
          Play now
        </a>
      </div>
    </div>
  </nav>
</template>
  
  <script>
export default {
  name: 'Navbar',

  data() {
    return {
      items: [
        {
          name: 'Your Choice',
          href: '#your-choice'
        },
        {
          name: 'Characters',
          href: '#characters'
        },
        {
          name: 'Explore',
          href: '#explore'
        },
        {
          name: 'Starter Packs',
          href: '#starter-packs'
        }
      ]
    }
  }
}
</script>
  
<style lang="scss" scoped>
.navbar {
  &-brand img {
    max-width: 120px;
  }
}
</style>