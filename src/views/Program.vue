<template>
  <div class="program">
    <div class="program__content">
      <pre style="text-align:left;">
      🤟 NELJAPÄEV "Mötör Feast" on pühendatud tsiklirahvale & rock'n'rollile
      17:30 Tsikliparaadi algus Tallinnas (lisainfo tulekul)
      19:00 Esimese päeva avamine Viikingite Külas
      19:40 Bändid! Järjestus (esimene kuni viimane) Riser, No More Fridays, Metallica tribute, AC/DC tribute: Coverage, Teravmoon, DJ Neil Savi
      🤟 REEDE "Viking Feast" on pühendatud 🇪🇪 keelsele raskemuusikale
      10:00-16:30 #chilläx ja oleme uutele saabujatele avatud, meelelahutuslik programm (täpsustub)
      16:30 Bändid! Itk, Kolmteist, Ulguränd, Pime, Hetero, Herald, Kurjam, Metsatöll, DJ Taat
      🤟 LAUPÄEV "Barbar Feast" on pühendatud 🇪🇪 raskemuusikale
      10:00-12:30 #chilläx ja oleme uutele saabujatele avatud, meelelahutuslik programm (täpsustub)
      12:30 The Lou Lous, Desert Queen, Defeatem, Boogie Company, Sold, Val Tvoar, Dreadpin, Killhall, Süngehel, Dead Furies, Redneck Rampage, Nihilistikrypt, Horror Dance Squad, Goresoerd, DJ Andres Uibo
      </pre>
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
.program {
  padding: 3rem 0;

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: fit-content;
    height: 28.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  img {
    width: 20rem;
  }
}

@media only screen and (min-width: 768px) {
  .program {
    img {
      width: fit-content;
    }
  }
}
</style>
