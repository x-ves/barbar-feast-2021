<template>
  <div id="home">
    <section id="welcome">
      <h1>Barbar Feast 2021</h1>
      <span>{{ $t("content.slogan") }}</span> <br>
      <span>@ {{ $t("content.location") }}</span> <br>
      <span>8.-10. {{ $t("content.july") }}</span>
    </section>
    <section id="lineup">
      <h1>{{ $t("content.lineup") }}</h1>
      <Cards />
    </section>
    <section id="location">
      <h3>{{ $t("location.header") }}</h3>
      <iframe
        class="map"
        width="600"
        height="450"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCkbRGuQf4n_fr-IANecyQHNEMKQSSbkFo&map_id=10e49aa98a43cafd&q=Viikingite+küla" allowfullscreen>
      </iframe>
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

#location {
  margin: 1rem 0;

  .map {
    
  }
}

</style>
