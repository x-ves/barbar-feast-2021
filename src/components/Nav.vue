<template>
  <div>
    <div class="nav__backdrop" v-if="menuOpen" @click="toggleMenu"></div>
    <nav class="nav">
      <LocaleSwitcher class="nav__langSwitcher" />
      <div class="nav__links" @click="toggleMenu">
        <LocalizedLink class="nav__links__link" to="/">{{
          $t("nav.home")
        }}</LocalizedLink>
        <LocalizedLink class="nav__links__link" to="/bands">{{
          $t("content.lineup")
        }}</LocalizedLink>
        <a
          class="nav__links__link"
          href="https://www.ticketer.ee/barbar-feast-2021"
          target="_blank"
          >{{ $t("content.tickets2") }}</a
        >
        <LocalizedLink class="nav__links__link" to="/program">{{
          $t("nav.program")
        }}</LocalizedLink>
        <LocalizedLink class="nav__links__link" to="/info">{{
          $t("nav.info")
        }}</LocalizedLink>
      </div>
      <span class="nav__icon" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
      </span>
    </nav>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LocalizedLink from "@/components/LocalizedLink";
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  components: { LocaleSwitcher, LocalizedLink },
  methods: {
    toggleMenu: function() {
      const navLinks = document.querySelector(".nav__links");
      const langSwitch = document.querySelector(".nav__langSwitcher");
      const linkStyle = window.getComputedStyle(navLinks);
      const width = window.innerWidth;
      if (width < 768) {
        if (linkStyle.getPropertyValue("display") === "none") {
          this.menuOpen = true;
          navLinks.style.display = "flex";
          langSwitch.style.display = "block";
        } else {
          this.menuOpen = false;
          navLinks.style.display = "none";
          langSwitch.style.display = "none";
        }
      }
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgba(182, 23, 23, 0.95), rgba(101, 39, 39, 0.95));
  color: var(--main-text-color);
  flex-direction: column-reverse;

  &__backdrop {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__langSwitcher {
    display: none;
  }

  &__links {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;

    &__link {
      color: var(--main-text-color);
      font-size: 1.2rem;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      padding: 10px;
      transition: 0.3s all;

      &:hover {
        background-color: rgba(66, 40, 40, 0.333);
      }
    }
  }

  &__icon {
    align-self: flex-end;
    cursor: pointer;
    padding: 10px;
    transition: all 0.4s;
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 768px) {
  .nav {
    justify-content: space-between;
    flex-direction: row;

    &__langSwitcher {
      display: block;
    }

    &__icon {
      display: none;
    }

    &__links {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      &__link {
        font-size: 1rem;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1440px) {
}
</style>
