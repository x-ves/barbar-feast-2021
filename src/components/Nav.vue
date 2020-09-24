<template>
    <nav class="nav">
      <LocaleSwitcher class="nav__langSwitcher" />
      <div class="nav__links">
        <LocalizedLink class="nav__links__link" to="/">{{ $t("nav.home") }}</LocalizedLink>
        <LocalizedLink class="nav__links__link" to="/bands">{{ $t("content.lineup") }}</LocalizedLink>
        <LocalizedLink class="nav__links__link" to="/about">{{ $t("nav.about") }}</LocalizedLink>
      </div>
      <span class="nav__icon">
        <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
      </span>
    </nav>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LocalizedLink from "@/components/LocalizedLink";
export default {
    components: { LocaleSwitcher, LocalizedLink },
}
</script>

<style lang="scss">

.nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgb(46, 112, 168), rgb(0, 204, 255));
  color: rgb(255, 255, 255);

 &__links {

   display: none;

   &__link {
      color: rgb(245, 245, 245);
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      padding: 10px;
      transition: 0.3s all;

      &:hover {
        background-color: rgba(46, 111, 168, 0.333);
      }
    }
  }

  &__icon {
    padding: 10px;
    transition: all 0.4s;
  }
}

@media only screen and (min-width: 768px) {
  .nav {
      justify-content: space-between;

    &__icon {
      display: none;
    }

    &__links {
      display: flex;
    }
  }
}

@media only screen and (min-width: 1024px) {

}

@media only screen and (min-width: 1440px) {

}
</style>