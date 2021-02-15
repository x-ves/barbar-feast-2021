<template>
  <div id="home">
    <section id="welcome" class="welcome">
      <img src="@/assets/bf_pageheader_3.png" alt="">
      <div class="welcome__content">
        <div class="welcome__content__brief">
          <span class="welcome__content__brief__slogan">{{ $t("content.slogan") }}</span>
<!--      <span>@ {{ $t("location.location") }}</span>
          <span>8.-10. {{ $t("content.july") }}</span> -->
        </div>
        <Counter />
        <TicketsButton />
      </div>
    </section>
    <section id="lineup" class="lineup">
      <h1 class="lineup__title">{{ $t("content.lineup") }}</h1>
      <BandList />
    </section>
    <section id="location" class="location">
      <div class="location__slides">
        <div class="location__slides__slider">
          <Carousel />
        </div>
        <div class="location__slides__text">
          <h1 class="location__title">{{ $t("location.header") }}</h1>
          <p class="location__desc">Barbar Feast leiab 2021. aastal aset Kose vallas Saula küla piirides asuvas Viikingite külas. <br><br>
          Küla asub Pirita jõe ääres ning pakub aastaringselt oma külastajatele kehakinnitust, vaatamisväärsusi, elamusmajutust ja erinevaid 8.-11. saj eesti viikingikultuurist inspireeritud vaba aja veetmise võimalusi. <br><br>

          Rohkem infot ja pilte Viikingite küla kohta leiab nende <a href="https://www.viikingitekyla.ee/" target="_blank">kodulehelt</a>. <br><br>

          Lisaks Viikingite külale leidub Kose vallas ka muid vaatamisväärsusi nagu Saula siniallikad, Tuhala nõiakaev, Kose-Uuemõisa park, ja mitmeid teisigi.
          </p>
        </div>
      </div>
      <GoogleMap />
    </section>
    <section id="faq" class="faq">
      <h1 class="faq__title">{{ $t("faq.title") }}</h1>
      <div class="faq__wrapper">
        <FAQ class="faq__wrapper__faq" />
      </div>
    </section>
    <section id="sponsors" class="sponsors">
      <h1 class="sponsors__title">{{ $t("sponsors.title") }}</h1>
      <div class="sponsors_wrapper">
        Siia tulevad sponsorite logod.
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import BandList from "@/components/BandList.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import TicketsButton from "@/components/TicketsButton.vue";
import FAQ from "@/components/FAQ.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: { Counter, BandList, GoogleMap, TicketsButton, FAQ, Carousel }
};
</script>

<style lang="scss">

body {
  background:rgb(182,23,23);
}

.welcome {
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  text-transform: uppercase;
  background: rgb(182,23,23);

  img {
    width: 100%;
  }

  &__content {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-between;
    font-weight: 500;

    &__brief {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;

      &__slogan {
        margin: 0;
        font-size: 2.3rem;
        font-weight: 800;
        color: rgb(255, 255, 255);
        -webkit-text-stroke: 1.5px rgb(248, 1, 0);
        line-height: 1.1;
        padding: 0 0.2rem;
        text-transform: uppercase;
      }
    }
  }
}

.lineup {
  padding: 2rem 0;
  background: rgb(230, 248, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &__title {
    margin: 0 0 1rem 0;
    font-size: 2rem;
    text-align: center;
    color: rgb(0, 204, 255);
    text-transform: uppercase;
  }
}

.faq {
  color: rgb(0, 204, 255);
  padding: 1rem 0;

  &__title {
    font-size: 2rem;
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
      font-size: 1.1rem;
    }

    &__skull {
      display: none;
    }

  }
}

.location {
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);

  a {
    color: rgb(0, 204, 255);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  &__slides {
    display: flex;
    flex-direction: column-reverse;

    &__slider, &__text {
      display: flex;
      flex-direction: column;
    }

    &__text {
      justify-content: center;
    }
  }

  &__title {
    color: rgb(0, 204, 255);
    margin: 1rem;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  &__desc {
    margin: 0;
    padding: 1rem;
    width: fit-content;
    align-self: center;
  }
}

.sponsors {
  padding: 1rem 0;
  background: rgb(230, 248, 255);
  color: rgb(0, 204, 255);
  text-align: center;

  &__title {
      color: rgb(0, 204, 255);
      margin: 1rem;
      font-size: 2rem;
      text-transform: uppercase;
  }
}

@media only screen and (min-width: 768px) {

.welcome {
  padding-top: 2.5rem;

  img {
    display: block;
  }

  &__content {
    padding: 0;
    width: 50%;

    &__brief {
      font-size: 1.1rem;

      &__slogan {
        font-size: 3rem;
        line-height: 1.1;
      }
    }
  }
}

.location {

  &__slides {
    display: flex;
    justify-content: space-evenly;
  }

  &__desc {
    width: 43rem;
  }
}

.faq {
  &__title {
    font-size: 2rem;
  }
  &__wrapper {
    &__skull {
      display: block;
      width: 14rem;
      margin: 0.5rem;
    }
  }
}

}

@media only screen and (min-width: 1024px) {

.welcome {
/*   flex-direction: row; */

  img {
    width: 100%;
  }

  &__content {
    &__brief {
      &__slogan {
        font-size: 3rem;
      }
    }
  }
}

.location {
  font-size: 1rem;

  &__slides {
    flex-direction: row-reverse;
  }
}

.faq {
  &__wrapper {
    &__faq {
      font-size: 1rem;
    }
  }
}

}

@media only screen and (min-width: 1440px) {

}

</style>
