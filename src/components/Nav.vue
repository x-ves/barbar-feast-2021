<template>
  <nav class="nav">
    <LocaleSwitcher class="nav__langSwitcher" />
    <div class="nav__links">
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
    <span class="nav__icon" @click="openMenu">
      <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
    </span>
  </nav>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LocalizedLink from "@/components/LocalizedLink";
export default {
  components: { LocaleSwitcher, LocalizedLink },
  methods: {
    openMenu: function() {
      const navLinks = document.querySelector(".nav__links");
      const langSwitch = document.querySelector(".nav__langSwitcher");
      const linkStyle = window.getComputedStyle(navLinks);
      if (linkStyle.getPropertyValue("display") === "none") {
        navLinks.style.display = "flex";
        langSwitch.style.display = "block";
      } else {
        navLinks.style.display = "none";
        langSwitch.style.display = "none";
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
    }
  }
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1440px) {
}
</style>
