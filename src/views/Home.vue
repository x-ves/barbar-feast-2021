<template>
  <div id="home">
    <section id="welcome">
      <h1>Barbar Feast 2021</h1>
      <span>{{ $t("app.slogan") }}</span> <br>
      <span>@ {{ $t("app.location") }}</span> <br>
      <span>8.-10. {{ $t("app.july") }}</span>
    </section>
    <section id="lineup">
      <h1>{{ $t("app.lineup") }}</h1>
      <Cards />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: { Cards }
};
</script>

<style lang="scss">

#home {
  margin: 0;
  padding: 0;
}

#welcome {
  text-align: center;
  padding: 3rem 0;
  color: rgb(20, 20, 20);
  text-transform: uppercase;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 800;
    color: rgb(255, 255, 255);
    -webkit-text-stroke: 2.5px rgb(248, 1, 0);
  }
}

#lineup {
  h1 {
    text-align: center;
  }
}

</style>
