<template>
  <div class="info">
    <InfoCards />
  </div>
</template>

<script>
import InfoCards from "@/components/InfoCards.vue";

export default {
  name: "Info",
  components: { InfoCards }
};
</script>

<style lang="scss">
.info {
  padding: 3rem 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background: var(--secondary-bg-color);
}
</style>
