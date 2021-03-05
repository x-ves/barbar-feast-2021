<template>
  <div id="app">
    <div v-if="isLoading">LOADING</div>
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
}
</script>

<style lang="scss">

  :root {
    --main-bg-color: rgb(182, 23, 23);
    --secondary-bg-color: rgb(142, 20, 20);
    --third-bg-color: rgb(66, 40, 40);
    --card-bg-color: rgb(107, 14, 14);
    --card-bg-hover: rgb(161, 20, 20);
    --main-text-color: rgb(234, 233, 221);
    --secondary-text-color: rgb(59, 212, 220);
    --hover-text-color: rgb(104, 255, 255);
    --darkest-of-the-dark: rgb(43, 27, 27);
    --main-btn-bg: rgb(66, 40, 40);
    --secondary-btn-bg: rgb(43, 27, 27);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    color: var(--main-text-color);
  }

  Nav {
    z-index: 2;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

</style>
