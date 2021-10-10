<template>
  <div class="carousel__view">
    <transition-group class="carousel" tag="div">
      <div v-for="slide in slides" class="slide" :key="slide.id">
        <img class="slide__img" :src="slide.imgUrl" />
      </div>
    </transition-group>
    <div class="carousel__controls">
      <button class="carousel__controls__button" @click="previous">◀</button>
      <button class="carousel__controls__button" @click="next">▶</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          imgUrl: "/droonipilt.jpg"
        },
        {
          id: 2,
          imgUrl: "/kalamaja.jpg"
        },
        {
          id: 3,
          imgUrl: "/kalamaja2.jpg"
        },
        {
          id: 4,
          imgUrl: "/Mäepealne-katusealune.jpg"
        },
        {
          id: 5,
          imgUrl: "/s88gilauad.jpg"
        }
      ],
      timer: null
    };
  },

  mounted() {
    this.startRotation();
  },

  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 5000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    resetRotation() {
      this.stopRotation();
      this.startRotation();
    },
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
      this.resetRotation();
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
      this.resetRotation();
    }
  }
};
</script>

<style lang="scss">
.carousel__view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  min-height: 24em;

  &__controls {
    height: 24em;
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &:hover button {
      opacity: 1;
    }

    button {
      opacity: 0;
      transition: all 0.3s;
      border: none;
      background: rgba(0, 0, 0, 0);
      color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      font-size: 1.25rem;
      width: 2.5rem;
      outline: none;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;
  min-width: 100%;

  &__img {
    object-fit: cover;
    height: 24em;
    width: 100%;
    align-self: center;
    justify-self: center;
    filter: grayscale(25%);
  }

  &:first-of-type,
  &:last-of-type {
    opacity: 0;
  }
}

@media only screen and (min-width: 768px) {
  .carousel {
    width: 40em;
    min-height: 28em;
    &__controls {
      width: 40em;
      height: 28em;
    }

    .slide {
      &__img {
        height: 28em;
        width: 40em;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .carousel__view {
    margin: 1rem auto;
    width: inherit;
  }

  .carousel {
    min-width: 30em;
    min-height: 24em;
    width: 100%;

    &__controls {
      min-width: 30em;
      min-height: 28em;
      width: fit-content;
    }

    .slide {
      &__img {
        min-height: 24em;
        min-width: 30em;
      }
    }
  }
}

@media only screen and (min-width: 1300px) {
  .carousel__view {
    margin: 1rem auto;
    width: inherit;
  }

  .carousel {
    min-width: 40em;
    min-height: 24em;
    width: 100%;

    &__controls {
      min-width: 40em;
      min-height: 28em;
      width: fit-content;
    }

    .slide {
      &__img {
        min-height: 24em;
        min-width: 30em;
      }
    }
  }
}
</style>
