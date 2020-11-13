<template>
    <div id="bands">
        <h1>{{ $t("content.lineup") }}</h1>
        <Cards />
    </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
    name: "Lineup",
    components: { Cards }
};
</script>

<style lang="scss">

  #bands {
    padding: 3rem 0;

    h1 {
      color: rgb(0, 204, 255);
      text-align: center;
      margin: 1rem 0 0.5rem 0;
      text-transform: uppercase;
    }
  }


  @media only screen and (min-width: 768px) {

  }

  @media only screen and (min-width: 1024px) {

  }

  @media only screen and (min-width: 1440px) {

  }

</style>