<template>
  <div id="app">
    <div v-if="isLoading" style="display: flex;">
      <img src="barbar1.png" class="loadImg" alt="" />
    </div>
    <div v-else>
      <Nav></Nav>
      <div class="container">
        <router-view />
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EventBus from "@/EventBus";

export default {
  metaInfo() {
    return {
      title: this.$t("app.title"),
      meta: [
        {
          name: "description",
          content: this.$t("location.desc")
        },
        {
          property: "og:title",
          content: this.$t("app.title")
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "robots",
          content: "noindex, follow"
        }
      ]
    };
  },
  data: () => ({
    isLoading: true
  }),
  mounted() {
    EventBus.$on("i18n-load-start", () => (this.isLoading = true));
    EventBus.$on("i18n-load-complete", () => (this.isLoading = false));
  },
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
:root {
  --main-bg-color: rgb(182, 23, 23);
  --secondary-bg-color: rgb(142, 20, 20);
  --third-bg-color: rgb(66, 40, 40);
  --card-bg-color: rgb(107, 14, 14);
  --card-bg-hover: rgb(161, 20, 20);
  --main-text-color: rgb(234, 233, 221);
  --secondary-text-color: rgb(146, 221, 222);
  --hover-text-color: rgb(114, 196, 202);
  --darkest-of-the-dark: rgb(43, 27, 27);
  --main-btn-bg: rgb(66, 40, 40);
  --secondary-btn-bg: rgb(43, 27, 27);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  color: var(--main-text-color);
}

nav {
  z-index: 2;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;

  ::selection {
    background: var(--third-bg-color);
    color: var(--main-text-color);
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}

.loadImg {
  margin: 13rem auto;
  width: 200px;
  -webkit-animation: rotation 3s infinite linear;
}
</style>
