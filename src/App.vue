<template>
  <div id="app">
    <div v-if="isLoading">Loading...</div>
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

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1b3752;
  }

</style>
