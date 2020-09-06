<template>
  <div class="home">
    <div class="welcome">
      <h1>Barbar Feast 2021</h1>
      <span>{{ $t("app.slogan") }}</span>
    </div>
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards
  }
};
</script>

<style lang="scss">

.welcome {
  text-align: center;
  padding: 1rem;
  color: rgb(55, 62, 160);
  text-transform: uppercase;

  h1 {
    margin: 0;
  }
}

</style>
