<template>
  <div class="info">
    <h1>{{ $t("content.construction") }}</h1>
    <img src="/metalconstruction.gif" alt="" style="width: 650px" />
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
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background: var(--secondary-bg-color);
}
</style>
