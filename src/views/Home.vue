<template>
  <div id="home">
    <section id="welcome" class="welcome">
      <img src="@/assets/feastbeast.png" alt="">
      <div class="welcome__content">
        <h1 class="welcome__content__title">Barbar Feast 2021</h1>
        <div class="welcome__content__brief">
          <span>{{ $t("content.slogan") }}</span>
          <span>@ {{ $t("location.location") }}</span>
          <span>8.-10. {{ $t("content.july") }}</span>
        </div>
        <Counter />
        <TicketsButton />
      </div>
    </section>
    <section id="lineup" class="lineup">
      <h1 class="lineup__title">{{ $t("content.lineup") }}</h1>
      <hr>
      <BandList />
    </section>
    <section id="faq" class="faq">
      <h1 class="faq__title">{{ $t("faq.title") }}</h1>
      <div class="faq__wrapper">
        <FAQ class="faq__wrapper__faq" />
        <img src="barbar2.png" class="faq__wrapper__skull" alt="">
      </div>
    </section>
    <section id="location" class="location">
      <h1 class="location__title">{{ $t("location.header") }}</h1>
      <hr>
      <GoogleMap />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import BandList from "@/components/BandList.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import TicketsButton from "@/components/TicketsButton.vue";
import FAQ from "@/components/FAQ.vue"

export default {
  name: "Home",
  components: { Counter, BandList, GoogleMap, TicketsButton, FAQ }
};
</script>

<style lang="scss">

body {
  background: rgb(250, 250, 250);
}

hr {
  margin: 0.3rem 0 1rem 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 204, 255), rgba(0, 0, 0, 0));
}

.welcome {
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: rgb(20, 20, 20);

  img {
    align-self: flex-start;
    width: 17rem;
  }

  &__content {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-between;

    &__title {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 800;
      color: rgb(255, 255, 255);
      -webkit-text-stroke: 2px rgb(248, 1, 0);
      text-transform: uppercase;
    }

    &__brief {
      display: flex;
      flex-direction: column;
    }
  }
}

.lineup {
  padding: 2rem 0;

  &__title {
    padding: 0;
    margin: 0;
    text-align: center;
    color: rgb(0, 204, 255);
    text-transform: uppercase;
  }
}

.faq {
  padding: 1rem;
  background: rgba(0, 204, 255, 0.666);
  color: rgb(255, 255, 255);

  &__title {
    margin: 0.5rem;
    text-align: center;
    text-transform: uppercase;
  }

  &__wrapper {
    margin: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    &__faq {
      margin: 1.5rem 0 0 0;
    }

    &__skull {
      width: 20rem;
    }

  }
}

.location {
  padding-top: 3rem;

  &__title {
    color: rgb(0, 204, 255);
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
}

@media only screen and (min-width: 768px) {

.welcome {
  flex-direction: row;

  img {
    width: 26rem;
  }

  &__content {
    padding: 0;

    &__title {
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }
}

}

@media only screen and (min-width: 1024px) {

.welcome {

  img {
    width: 43rem;
  }

  &__content {
    &__title {
      font-size: 4rem;
    }
  }
}

}

@media only screen and (min-width: 1440px) {

}

</style>
