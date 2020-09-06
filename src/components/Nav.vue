<template>
    <div class="nav">
        <div class="nav__start">
            <router-link class="nav__link" to="/">{{ $t("nav.home") }}</router-link>
            <router-link class="nav__link" to="/about">{{ $t("nav.about") }}</router-link>
        </div>
        <div class="nav__end">
            <LocaleSwitcher />
        </div>
    </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher"
export default {
    components: { LocaleSwitcher }
}
</script>

<style lang="scss">

.nav {
  position: fixed;
  width: 100%;
  padding: 0 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #fff;
  background: linear-gradient(rgb(46, 112, 168), rgb(90, 199, 227));

  .nav__start,
  .nav__end {
    display: flex;
    align-items: center;
  }

 .nav__link {
    color: rgb(245, 245, 245);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    padding: 10px;
    transition: 0.3s all;
  }
  .nav__link:hover {
    background-color: rgba(46, 111, 168, 0.333);
  }
}
</style>