<template>
  <div id="home">
    <section id="welcome" class="welcome">
      <picture class="welcome__img">
        <source
          media="(min-width:1024px)"
          srcset="@/assets/bf_pageheader_3.jpg"
        />
        <source
          media="(min-width:678px)"
          srcset="@/assets/bf_eventheader_3.jpg"
        />
        <img src="@/assets/BFMobla.jpg" alt="" />
      </picture>
      <div class="welcome__content">
        <Counter />
        <TicketsButton />
      </div>
    </section>
    <!--     <section id="lineup" class="lineup">
      <h1 class="lineup__title">{{ $t("content.lineup") }}</h1>
      <BandList />
    </section> -->
    <section id="location" class="location">
      <div class="location__slides">
        <div class="location__slides__slider">
          <Carousel />
        </div>
        <div class="location__slides__text">
          <h1 class="location__title">{{ $t("location.header") }}</h1>
          <p class="location__desc">
            {{ $t("location.desc") }} <br /><br />
            {{ $t("location.event") }}
            <a
              href="https://www.facebook.com/events/1554988891317342"
              target="_blank"
              >{{ $t("location.eventlink") }}</a
            >
            <br />
            {{ $t("location.more") }}
            <a href="https://www.viikingitekyla.ee/" target="_blank">{{
              $t("location.link")
            }}</a
            >. <br /><br />
          </p>
        </div>
      </div>
      <GoogleMap />
      <section class="bus">
        <div class="bus__wrapper">
          <img class="bus__img" src="@/assets/festivalibuss.jpg" alt="" />
          <div class="bus__content">
          <h1 class="bus__title">{{ $t("bus.title") }}</h1>
          <p class="bus__desc">
            <span v-if="this.$i18n.locale !== 'et'">
              {{ $t("bus.content.price") }} <br /><br />
              {{ $t("bus.content.booking.desc") }} <br />
              {{ $t("bus.content.booking.desc2") }} <br />
              {{ $t("bus.content.booking.name") }} <br />
              {{ $t("bus.content.booking.phone") }} <br />
              {{ $t("bus.content.booking.date") }} <br /><br />
            </span>
            {{ $t("bus.content.leave") }} <br /><br />
            {{ $t("bus.content.thursday") }} <br />
            {{ $t("bus.content.friday") }} <br />
            {{ $t("bus.content.saturday") }} <br />
            {{ $t("bus.content.sunday") }} <br /><br />
            <span v-if="this.$i18n.locale !== 'et'">{{
              $t("bus.content.ticket")
            }}</span>
            <span v-if="this.$i18n.locale === 'et'">
              <a
                target="_blank"
                href="https://metaltravel.net/et/trip/festivalibuss-barbar-feastile/"
                >{{ $t("bus.content.moreinfo") }}</a
              >
            </span>
          </p>
          </div>
        </div>
      </section>
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
        <a target="_blank" href="https://www.hbrebel.cz/en/"
          ><img
            class="sponsors__image"
            src="@/assets/Rebel-transparent.png"
            alt=""
        /></a>
        <a target="_blank" href="https://www.fireballwhisky.com/"
          ><img
            class="sponsors__image"
            src="@/assets/Fireball-transparent.png"
            alt=""
        /></a>
        <a target="_blank" href="https://www.facebook.com/roaddevilmc"
          ><img
            class="sponsors__image"
            src="@/assets/Road-Devil-transparent.png"
            alt=""
        /></a>
        <a target="_blank" href="https://puhastebeer.com/"
          ><img
            class="sponsors__image"
            src="@/assets/Pühaste-transparent.png"
            alt=""
        /></a>
        <a target="_blank" href="https://www.terminal.ee/"
          ><img
            class="sponsors__image"
            src="@/assets/Terminal-transparent.png"
            alt=""
        /></a>
        <a target="_blank" href="https://www.facebook.com/www.hairpoint.ee"
          ><img
            class="sponsors__image"
            src="@/assets/Hairpoint-transparent.png"
            alt=""
        /></a>
        <a target="_blank" href="https://www.facebook.com/barbarestonia"
          ><img
            class="sponsors__image"
            src="@/assets/Barbar-transparent.png"
            alt=""
        /></a>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
/* import BandList from "@/components/BandList.vue"; */
import GoogleMap from "@/components/GoogleMap.vue";
import TicketsButton from "@/components/TicketsButton.vue";
import FAQ from "@/components/FAQ.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Counter /* , BandList */,
    GoogleMap,
    TicketsButton,
    FAQ,
    Carousel
  },
  metaInfo() {
    return {
      title: this.$t("app.title"),
      meta: [
        {
          name: "description",
          content: this.$t("location.desc")
        },
        {
          property: "og:title",
          content: this.$t("app.title")
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "robots",
          content: "index, follow"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
body {
  /*   background: var(--main-bg-color); */
  background: url("/img-noise-1200x1200.png");
  background-color: var(--main-bg-color);
}

.welcome {
  padding-top: 2.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  text-transform: uppercase;

  &__img {
    width: 100%;

    & img {
      width: 100%;
    }
  }

  &__content {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-between;
    font-weight: 500;
    width: 97%;
  }
}

.bus {
  padding: 2rem 0;
  width: 100%;
  background: var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &__title {
    margin: 0 0 1rem 0;
    font-size: 2rem;
    text-align: center;
    color: var(--secondary-text-color);
    text-transform: uppercase;
  }

  &__wrapper {
    width: 95%;
    align-self: center;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  &__desc {
    margin: 1rem auto;
    padding: 1rem;
    width: 100%;
    align-self: center;
    border: 0.65rem dashed var(--darkest-of-the-dark);
  }

  &__img {
    width: 100%;
  }
}

.faq {
  color: var(--secondary-text-color);
  padding: 2rem 0;

  &__title {
    font-size: 2rem;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  &__wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    &__faq {
      margin: 1.5rem 0 0 0;
      font-size: 1rem;
    }

    &__skull {
      display: none;
    }
  }
}

.location {
  padding: 1rem 0 0 0;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  background: radial-gradient(var(--main-bg-color), var(--secondary-bg-color));

  a {
    color: var(--secondary-text-color);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: var(--hover-text-color);
    }
  }

  &__slides {
    display: flex;
    flex-direction: column-reverse;

    &__slider,
    &__text {
      display: flex;
      flex-direction: column;
    }

    &__text {
      justify-content: center;
      width: 97%;
      margin: 0 auto;
    }
  }

  &__title {
    color: var(--secondary-text-color);
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
    border: 0.65rem dashed var(--darkest-of-the-dark);
  }
}

.sponsors {
  padding: 2rem 0;
  background: radial-gradient(var(--main-bg-color), var(--secondary-bg-color));
  color: var(--secondary-text-color);
  text-align: center;

  &__title {
    color: var(--secondary-text-color);
    margin: 0 0 1rem 0;
    font-size: 2rem;
    text-transform: uppercase;
  }

  &__wrapper {
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__image {
    align-self: center;
    justify-self: center;
    width: 10rem;
  }
}

@media only screen and (min-width: 768px) {
  .welcome {
    padding-top: 2.5rem;

    &__content {
      padding: 2rem auto;
      width: 70%;
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
    &__desc {
      border: 1rem dashed var(--darkest-of-the-dark);
    }
  }

  .location {
    font-size: 1.1rem;
    align-items: center;
    padding: 0;
    width: 100%;

    &__desc {
      width: fit-content;
      max-width: 40rem;
      width: 90%;
    }

    &__slides {
      width: 100%;
      flex-direction: row-reverse;

      &__slider {
        width: 50%;
      }
    }
  }

  .bus {
    &__wrapper {
      flex-direction: row;
      justify-content: space-evenly;
      align-content: center;
      align-self: center;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-content: center;
    }

    &__desc {
      width: 90%;
      margin: 1.1rem;
    }

    &__img {
      width: 45%;
    }
  }

  .faq {
    &__wrapper {
      &__faq {
        font-size: 1.1rem;
      }
    }
  }
}

@media only screen and (min-width: 1440px) {
}
</style>
