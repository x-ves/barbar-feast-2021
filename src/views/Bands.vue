<template>
    <div id="bands">
      <div class="border">
        <h1>{{ $t("content.lineup") }}</h1>
        <Cards />
      </div>
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

  .border {
    border: 1rem dashed var(--darkest-of-the-dark);
  }

  #bands {
    padding: 3rem 0;
    background: url("/img-noise-1200x1200.png");
    background-color: var(--secondary-bg-color);

    h1 {
      color: var(--secondary-text-color);
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