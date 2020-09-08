<template>
  <div id="app">
    <Nav></Nav>
    <div class="container">
    <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  setDocumentTitle,
  setDocumentLang
} from "@/util/i18n/document"

export default {
  components: {
    Nav,
    Footer
    },
  mounted() {
    this.$watch(
      "$i18n.locale",
      (newLocale, oldLocale) => {
        if (newLocale === oldLocale) {
          return
        }
        setDocumentLang(newLocale);
        setDocumentTitle(this.$t("app.title"));
      },
      { immediate: true }
    )
  }
}
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1b3752;
  }

</style>
