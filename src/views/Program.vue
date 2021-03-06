<template>
  <div class="program">
    <div class="program__content">
      <h1>{{ $t("content.construction") }}</h1>
      <img src="/metalconstruction.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Program"
};
</script>

<style lang="scss">
.program {
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
  .program {
    img {
      width: fit-content;
    }
  }
}
</style>
