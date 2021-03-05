<template>
  <div>
    <div class="card" @click="$refs.bandModal.openModal()">
      <img class="card__img" :src="imgUrl" />
      <div class="card__desc">
        <h3>{{ name }}</h3>
        <p>({{ genre }})</p>
      </div>
    </div>
    <band-modal ref="bandModal">
      <template v-slot:header>
        <iframe
          class="card__vid"
          width="560"
          height="315"
          :src="vidUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <h3>{{ name }}</h3>
        <span>({{ genre }})</span>
      </template>

      <template v-slot:body>
        <p>{{ $t("bands." + id) }}</p>
      </template>

      <template v-slot:footer>
        <button class="arrowButton" @click="$refs.bandModal.closeModal()">
          <font-awesome-icon
            :icon="['fas', 'long-arrow-alt-left']"
          ></font-awesome-icon>
        </button>
        <div class="bandModal__socials">
          <a
            class="bandModal__socials__icon"
            target="_blank"
            v-if="webSite"
            :href="webSite"
            ><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon
          ></a>
          <a
            class="bandModal__socials__icon"
            target="_blank"
            v-if="faceBook"
            :href="faceBook"
            ><font-awesome-icon
              :icon="['fab', 'facebook-square']"
            ></font-awesome-icon
          ></a>
          <a
            class="bandModal__socials__icon"
            target="_blank"
            v-if="spotify"
            :href="spotify"
            ><font-awesome-icon :icon="['fab', 'spotify']"></font-awesome-icon
          ></a>
          <a
            class="bandModal__socials__icon"
            target="_blank"
            v-if="bandCamp"
            :href="bandCamp"
            ><font-awesome-icon :icon="['fab', 'bandcamp']"></font-awesome-icon
          ></a>
        </div>
      </template>
    </band-modal>
  </div>
</template>

<script>
import BandModal from "./BandModal";

export default {
  components: { BandModal },
  props: {
    id: Number,
    name: String,
    genre: String,
    imgUrl: String,
    vidUrl: String,
    webSite: String,
    faceBook: String,
    bandCamp: String,
    spotify: String
  }
};
</script>

<style lang="scss">
.card {
  margin: 0.5rem;
  width: 17rem;
  height: 15rem;
  font-size: 0.9rem;
  background: var(--card-bg-color);
  box-shadow: 0 0 5px rgba(34, 1, 1, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: var(--card-bg-hover);

    .card__img {
      filter: grayscale(50%);
    }
  }

  &__img {
    object-fit: cover;
    height: 12rem;
    filter: grayscale(100%);
  }

  &__vid {
    margin: 0 auto;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      margin: 0;
      padding: 0;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
}

@media only screen and (min-width: 768px) {
  .card {
    width: 20rem;
    height: 18rem;
    font-size: 1rem;

    &__img {
      height: 14rem;
    }
  }
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1440px) {
}
</style>
