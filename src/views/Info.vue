<template>
  <div class="info">
    <div class="info__content">
      <h1>{{ $t("content.construction") }}</h1>
      <img src="/metalconstruction.gif" alt="" />
    </div>
    <!-- <InfoCards /> -->
  </div>
</template>

<script>
/* import InfoCards from "@/components/InfoCards.vue"; */

export default {
  name: "Info"
  /*   components: { InfoCards } */
};
</script>

<style lang="scss">
.info {
  padding: 3rem 0;

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: fit-content;
    height: 28.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  img {
    width: 20rem;
  }
}

@media only screen and (min-width: 768px) {
  .info {
    img {
      width: fit-content;
    }
  }
}
</style>
