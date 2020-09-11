<template>
    <div class="nav">
      <div class="nav__links">
        <router-link class="nav__links__link" to="/">{{ $t("nav.home") }}</router-link>
        <a href="/#lineup" class="nav__links__link">{{ $t("app.lineup") }}</a>
        <router-link class="nav__links__link" to="/about">{{ $t("nav.about") }}</router-link>
        <LocaleSwitcher />
        <a href="javascript:void(0);" class="nav__links__icon" @click="openMenu()"><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon></a>
      </div>
    </div>
</template>

<script>

import LocaleSwitcher from "@/components/LocaleSwitcher"
export default {
  methods: {

  openMenu: function() {

  let navLink = document.querySelectorAll(".nav__links__link");
  let icon = document.querySelector(".nav__links__icon");

    for (var i = 0; i < navLink.length; i++) {
        if (navLink[i].style.display === "block") {
            navLink[i].style.display = "none";
            icon.innerHTML = "<font-awesome-icon :icon='['fas', 'bars']'></font-awesome-icon></a>";

          } else {
            navLink[i].style.display = "block";
            icon.innerHTML = "<font-awesome-icon :icon='['fas', 'times']'></font-awesome-icon></a>";
          }
    }
}
  },
    components: { LocaleSwitcher }
}


</script>

<style lang="scss">

.nav {
  position: fixed;
  background: linear-gradient(rgb(46, 112, 168), rgb(90, 199, 227));
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.295);
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;


 &__links {

   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;

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

    &__icon {
      padding: 10px;
      text-decoration: none;
      color: rgb(238, 238, 238);
      text-transform: uppercase;
      transition: all 0.4s;
      letter-spacing: 1px;
      width: 3rem;
      font-size: 1.1rem;
      font-weight: 500;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}

@media only screen and (min-width: 768px) {
  .nav {
      padding: 0 2rem;
      justify-content: space-between;

      &__links {
        flex-direction: row;
      }
  }
}

@media only screen and (min-width: 1024px) {

}

@media only screen and (min-width: 1440px) {

}
</style>