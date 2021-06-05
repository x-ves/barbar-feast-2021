<template>
  <div class="program">
    <div class="border">
      <h1 class="program__title">{{ $t("nav.program") }}</h1>
      <div class="program__content">
        <div class="program__content--card">
          {{ $t("program.thursday") }}
          <h3>MÖTÖR FEAST</h3>
          <ul>
            <li>17:30 {{ $t("program.motorcycle") }}</li>
            <li>19:00 {{ $t("program.start") }}</li>
            <br />
            <li
              style="text-transform: uppercase; color: var(--secondary-text-color); font-weight: 700; text-align: center"
            >
              {{ $t("program.bands") }}
            </li>
            <br />
            <li>19:40 Riser</li>
            <li>??:?? No More Fridays</li>
            <li>??:?? Metallica tribute</li>
            <li>??:?? AC/DC tribute: Coverage</li>
            <li>??:?? Teravmoon</li>
            <li>??:?? DJ Neil Savi</li>
          </ul>
        </div>
        <div class="program__content--card">
          {{ $t("program.friday") }}
          <h3>VIKING FEAST</h3>
          <ul>
            <li>10:00 {{ $t("program.entertainment") }}</li>
            <br />
            <li
              style="text-transform: uppercase; color: var(--secondary-text-color); font-weight: 700; text-align: center"
            >
              {{ $t("program.bands") }}
            </li>
            <br />
            <li>16:30 Itk</li>
            <li>??:?? Kolmteist</li>
            <li>??:?? Ulguränd</li>
            <li>??:?? Pime</li>
            <li>??:?? Hetero</li>
            <li>??:?? Herald</li>
            <li>??:?? Kurjam</li>
            <li>??:?? Metsatöll</li>
            <li>??:?? DJ Taat</li>
          </ul>
        </div>
        <div class="program__content--card">
          {{ $t("program.saturday") }}
          <h3>BARBAR FEAST</h3>
          <ul>
            <li>10:00 {{ $t("program.entertainment") }}</li>
            <br />
            <li
              style="text-transform: uppercase; color: var(--secondary-text-color); font-weight: 700; text-align: center"
            >
              {{ $t("program.bands") }}
            </li>
            <br />
            <li>12:30 The Lou Lous</li>
            <li>??:?? Desert Queen</li>
            <li>??:?? Defeatem</li>
            <li>??:?? Boogie Company</li>
            <li>??:?? Sold</li>
            <li>??:?? Val Tvoar</li>
            <li>??:?? Dreadpin</li>
            <li>??:?? Killhall</li>
            <li>??:?? Süngehel</li>
            <li>??:?? Dead Furies</li>
            <li>??:?? Redneck Rampage</li>
            <li>??:?? Nihilistikrypt</li>
            <li>??:?? Horror Dance Squad</li>
            <li>??:?? Goresoerd</li>
            <li>??:?? DJ Andres Uibo</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Program",
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
};
</script>

<style lang="scss">
.border {
  border: 0.65rem dashed var(--darkest-of-the-dark);
  width: 97%;
  margin: 0.5rem auto;
  padding: 0.5rem;
}

.program {
  padding: 3rem 0;

  &__title {
    color: var(--secondary-text-color);
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0 0.5rem 0;
    text-transform: uppercase;
  }

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 95%;

    &--card {
      padding: 1rem 0;
      width: 95%;
      text-align: center;
      transition: all 0.3s ease;
      display: block;
      background-color: var(--secondary-bg-color);
      margin: 0.5rem;
      position: relative;
      color: var(--main-text-color);
      font-weight: 600;
      font-size: 1rem;
      box-shadow: 9px 10px 22px -8px var(--darkest-of-the-dark);
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        list-style: none;
        text-align: left;
        margin: auto 1rem;
        padding: 0;
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 0.2rem auto 1rem auto;
    border-bottom: 1px solid var(--secondary-text-color);
    width: fit-content;
    color: var(--secondary-text-color);
  }

  img {
    width: 20rem;
  }
}

@media only screen and (min-width: 768px) {
  .border {
    border: 1rem dashed var(--darkest-of-the-dark);
  }

  .program {
    img {
      min-width: fit-content;
    }

    &__content {
      flex-direction: row;
      flex-wrap: wrap;

      &--card {
        font-size: 1.1rem;
        height: fit-content;
        width: 95%;
      }
    }
  }
}

::-webkit-scrollbar {
  background: var(--secondary-bg-color);
  width: 0.75rem;

  &-thumb {
    background: var(--third-bg-color);

    &:hover {
      background: var(--darkest-of-the-dark);
    }
  }
}

@media only screen and (min-width: 1024px) {
  .program {
    &__content {
      flex-wrap: nowrap;
      &--card {
        height: 28rem;
        overflow: auto;
        width: 32%;
      }
    }
  }
}
</style>
