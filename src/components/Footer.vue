<template>
  <footer>
    <div class="footer">
      <img src="@/assets/barbarprofiilikas.png" alt="BarBar logo" />
      <div class="footer__contacts">
        <h3>{{ $t("footer.msg") }}</h3>
        <br />
        <p>
          {{ $t("footer.phone") }}:
          <strong><a href="tel:+37258377788">+372 5837 7788</a></strong> <br />
          {{ $t("footer.mail") }}:
          <strong
            ><a href="mailto:barbarestonia@gmail.com"
              >barbarestonia@gmail.com</a
            ></strong
          >
        </p>
      </div>
      <div class="footer__socials">
        <span class="socsp"
          ><font-awesome-icon
            class="footer__socials__icon"
            :icon="['fab', 'facebook-square']"
          ></font-awesome-icon
          ><a href="https://www.facebook.com/barbarestonia/" target="_blank"
            >@barbarestonia</a
          ></span
        >
        <span class="socsp"
          ><font-awesome-icon
            class="footer__socials__icon"
            :icon="['fab', 'instagram']"
          ></font-awesome-icon
          ><a href="https://www.instagram.com/barbarestonia/" target="_blank"
            >@barbarestonia</a
          ></span
        >
        <span class="socsp"
          ><font-awesome-icon
            class="footer__socials__icon"
            :icon="['fab', 'instagram']"
          ></font-awesome-icon
          ><a href="https://www.instagram.com/barbarfeast/" target="_blank"
            >@barbarfeast</a
          ></span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(var(--main-bg-color), rgb(101, 39, 39));
  color: var(--main-text-color);
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.5;
  font-size: 0.9rem;

  img {
    width: 200px;
    height: 200px;
  }

  &__contacts {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      margin-bottom: 0;
    }

    p {
      text-align: center;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: var(--main-text-color);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__socials {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    width: fit-content;
    height: 6rem;

    a {
      text-decoration: none;
      color: var(--main-text-color);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }

    &__icon {
      margin-right: 0.25rem;
      font-size: 1.25rem;
      vertical-align: middle;
    }
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
    }

    &__contacts {
      width: 50%;

      h3 {
        margin: 0;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .footer {
    flex-direction: row;

    img {
      height: 125px;
      width: 125px;
    }

    &__contacts {
      width: fit-content;
    }
  }
}

@media only screen and (min-width: 1440px) {
}
</style>
