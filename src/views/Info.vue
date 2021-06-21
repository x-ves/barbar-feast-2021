<template>
  <div class="info">
    <div class="border">
      <h1 class="info__title">{{ $t("nav.info") }}</h1>
      <div class="info__content">
        <div class="info__content--box">
          <ul>
            <p class="info__content--desc" v-html="$t('info.desc')"></p>
            <br /><br />
            <li
              style="background:var(--secondary-bg-color);"
              v-html="$t('info.axe')"
            ></li>
            <li v-html="$t('info.splash')"></li>
            <li
              style="background:var(--secondary-bg-color);"
              v-html="$t('info.rite')"
            ></li>
            <li v-html="$t('info.market')"></li>
            <li
              style="background:var(--secondary-bg-color);"
              v-html="$t('info.boat')"
            ></li>
            <li v-html="$t('info.tentshop')"></li>
            <li
              style="background:var(--secondary-bg-color);"
              v-html="$t('info.mc')"
            ></li>
            <li v-html="$t('info.extra')"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  metaInfo() {
    return {
      meta: [
        {
          name: "robots",
          content: "noindex, follow"
        }
      ]
    };
  }
  /*   components: { InfoCards } */
};
</script>

<style lang="scss">
.border {
  border: 0.65rem dashed var(--darkest-of-the-dark);
  width: 97%;
  margin: 0.5rem auto;
  padding: 0.5rem;
}

.bluetext {
  color: var(--secondary-text-color);
  font-weight: 700;
}

.info {
  padding: 3rem 0;
  font-weight: 500;
  background: url("/img-noise-1200x1200.png");
  background-color: var(--secondary-bg-color);

  &__title {
    color: var(--secondary-text-color);
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0 0.5rem 0;
    text-transform: uppercase;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 95%;

    &--desc {
      margin: 0;
      padding: 0 0.25rem;
      display: inline-block;
    }

    &--box {
      background: var(--card-bg-hover);
      padding: 2rem 1rem 1rem 1rem;
      width: 95%;
      margin: 0.5rem;
      position: relative;
      color: var(--main-text-color);
      box-shadow: 9px 10px 22px -8px var(--darkest-of-the-dark);

      ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        width: 95%;

        li {
          padding: 0.5rem;
          border-left: 3px dashed var(--secondary-bg-color);
          border-right: 3px dashed var(--secondary-bg-color);

          &:first-of-type {
            border-top: 3px dashed var(--secondary-bg-color);
          }

          &:last-of-type {
            border-bottom: 3px dashed var(--secondary-bg-color);
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .border {
    border: 1rem dashed var(--darkest-of-the-dark);
  }

  .info {
    &__content {
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 1.1rem;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .info {
    &__content {
      flex-wrap: wrap;
      width: 95%;

      &--box {
        width: 65%;
      }
    }
  }
}
</style>
