<template>
  <div id="home">
    <section id="welcome" class="welcome">
      <img src="@/assets/feastbeast.png" alt="">
      <div class="welcome__content">
        <h1>Barbar Feast 2021</h1>
        <span>{{ $t("content.slogan") }}</span> <br>
        <span>@ {{ $t("location.location") }}</span> <br>
        <span>8.-10. {{ $t("content.july") }}</span>
        <Counter />
      </div>
    </section>
    <section id="lineup">
      <h1>{{ $t("content.lineup") }}</h1>
      <BandList />
    </section>
    <section id="location">
      <h1>{{ $t("location.header") }}</h1>
      <GoogleMap />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import BandList from "@/components/BandList.vue";
import GoogleMap from "@/components/GoogleMap.vue"

export default {
  name: "Home",
  components: { Counter, BandList, GoogleMap }
};
</script>

<style lang="scss">

#home {
  margin: 0;
  padding: 0;
}

.welcome {
  display: flex;
  align-items: center;
  text-align: center;
  color: rgb(20, 20, 20);
  text-transform: uppercase;

  img {
    width: 45.5rem;
  }

  h1 {
    margin: 0;
    font-size: 4rem;
    font-weight: 800;
    color: rgb(255, 255, 255);
    -webkit-text-stroke: 2.5px rgb(248, 1, 0);
  }
}

#lineup {
  padding-top: 3rem;

  h1 {
    text-align: center;
  }
}

#location {
  padding-top: 3rem;

  h1 {
    text-align: center;
  }

  .map {
    margin: 0 auto;
    width: 100%;
    height: 20rem;
  }
}

</style>
