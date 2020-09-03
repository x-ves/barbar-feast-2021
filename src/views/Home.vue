<template>
  <div class="home">
    <h1>Barbar Feast 2021</h1>
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
