<template>
    <div class="nav">
        <div class="nav__start">
            <router-link id="nav-center" class="nav-link" to="/">{{ $t("nav.home") }}</router-link>
            <router-link id="nav-right" class="nav-link" to="/about">{{ $t("nav.about") }}</router-link>
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

#nav {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #42b983;
  background-color: #cacaca;
}

#nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #fff;
  background-color: #cacaca;
}

.nav__start,
.nav__end {
  display: flex;
  align-items: center;
}

.nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

</style>