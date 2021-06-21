<template>
  <div class="program">
    <div class="border">
      <h1 class="program__title">{{ $t("nav.program") }}</h1>
      <!--     <div class="construction">
      <h1>{{ $t("content.construction") }}</h1>
      <img src="/metalconstruction.gif" alt="" />
    </div> -->
      <div class="program__content">
        <div class="program__content--card">
          {{ $t("program.thursday") }}
          <h3>MÖTÖR FEAST</h3>
          <ul>
            <li>
              <span class="bluetext">17:00</span> {{ $t("program.opening") }}
            </li>
            <li>
              <span class="bluetext">17:30 </span>
              <span v-html="$t('program.motorcycle')"></span>
            </li>
            <li>
              <span class="bluetext">19:00</span> {{ $t("program.start") }}
            </li>
            <br />
            <li
              style="text-transform: uppercase; color: var(--secondary-text-color); font-weight: 700; text-align: center"
            >
              {{ $t("program.bands") }}
            </li>
            <br />
            <li>
              <span class="bluetext">20:00</span> RISER
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">21:00</span> NO MORE FRIDAYS
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">22:10</span> METALLICA TRIBUTE
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">23:20</span> AC/DC TRIBUTE: COVERAGE
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">00:30</span> TERAVMOON
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">01:30</span> DJ NEIL SAVI
              {{ $t("program.fortstage") }}
            </li>
          </ul>
        </div>
        <div class="program__content--card">
          {{ $t("program.friday") }}
          <h3>VIKING FEAST</h3>
          <ul>
            <li>
              <span class="bluetext">10:00</span> {{ $t("program.opening") }}
            </li>
            <li>{{ $t("program.entertainment") }}</li>
            <br />
            <li
              style="text-transform: uppercase; color: var(--secondary-text-color); font-weight: 700; text-align: center"
            >
              {{ $t("program.bands") }}
            </li>
            <br />
            <li>
              <span class="bluetext">17:30</span> ITK
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">18:20</span> KOLMTEIST
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">19:10</span> ULGURÄND
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">20:00</span> PIME
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">20:50</span> HETERO
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">21:50</span> HERALD
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">22:50</span> KURJAM
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">23:50</span> METSATÖLL
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">01:30</span> DJ TAAT
              {{ $t("program.fortstage") }}
            </li>
          </ul>
        </div>
        <div class="program__content--card">
          {{ $t("program.saturday") }}
          <h3>BARBAR FEAST</h3>
          <ul>
            <li>
              <span class="bluetext">10:00</span> {{ $t("program.opening") }}
            </li>
            <li>{{ $t("program.entertainment") }}</li>
            <br />
            <li
              style="text-transform: uppercase; color: var(--secondary-text-color); font-weight: 700; text-align: center"
            >
              {{ $t("program.bands") }}
            </li>
            <br />
            <li>
              <span class="bluetext">13:00</span> THE LOU LOUS
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">13:50</span> DESERT QUEEN
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">14:40</span> DEFEATEM
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">15:30</span> BOOGIE COMPANY
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">16:30</span> SOLD
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">17:20</span> VAL TVOAR
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">18:10</span> DREADPIN
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">19:00</span> KILLHALL
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">19:50</span> SÜNGEHEL
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">20:40</span> HORROR DANCE SQUAD
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">21:40</span> REDNECK RAMPAGE
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">22:35</span> NIHILISTIKRYPT
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">23:30</span> DEAD FURIES
              {{ $t("program.riverstage") }}
            </li>
            <li>
              <span class="bluetext">00:25</span> GORESOERD
              {{ $t("program.fortstage") }}
            </li>
            <li>
              <span class="bluetext">01:30</span> DJ ANDRES UIBO
              {{ $t("program.fortstage") }}
            </li>
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

.link {
  color: var(--secondary-text-color);
  text-decoration: none;

  & :hover {
    color: var(--hover-text-color);
    text-decoration: underline;
  }
}

.construction {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
  height: 28.5rem;

  h1 {
    font-size: 1.5rem;
  }
}

.bluetext {
  color: var(--secondary-text-color);
}

.program {
  padding: 3rem 0;
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
      background: linear-gradient(var(--card-bg-hover), var(--card-bg-color));
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
