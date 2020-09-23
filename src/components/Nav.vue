<template>
    <nav class="nav">
      <div class="nav__links">
        <LocalizedLink class="nav__links__link" to="/">{{ $t("nav.home") }}</LocalizedLink>
        <LocalizedLink class="nav__links__link" to="/bands">{{ $t("content.lineup") }}</LocalizedLink>
        <LocalizedLink class="nav__links__link" to="/about">{{ $t("nav.about") }}</LocalizedLink>
      </div>
        <LocaleSwitcher />
    </nav>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LocalizedLink from "@/components/LocalizedLink";
export default {
    components: { LocaleSwitcher, LocalizedLink }
}
</script>

<style lang="scss">

.nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(rgb(46, 112, 168), rgb(90, 199, 227));

 &__links {

   display: flex;

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
}

@media only screen and (min-width: 768px) {
  .nav {
      justify-content: space-between;
  }
}

@media only screen and (min-width: 1024px) {

}

@media only screen and (min-width: 1440px) {

}
</style>