<template>
        <ul class="infocards">
        <li v-on:click="toggleCard(card)" v-for="card in infoCards" :key="card.key">
            <transition name="flip">
            <p v-bind:key="card.flipped" class="infocards__card">
                {{ card.flipped ? card.back : card.front }}
            </p>
            </transition>
        </li>
        </ul>
</template>

<script>
export default {
        data: () => ({
            infoCards: [
                {
                    front: "front tekst",
                    back: "back tekst",
                    flipped: false,
                    key: 1
                },
                {
                    front: "blabla",
                    back: "blabla3",
                    flipped: false,
                    key: 2
                }
            ]
        }),
        methods: {
            toggleCard(card) {
                card.flipped = !card.flipped;
            }
        }
}
</script>

<style lang="scss">

  .infocards {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;

    &__card {
        padding: 2rem;
        width: 10rem;
        height: 10rem;
        text-align: center;
        transition: all 0.3s ease;
        display: block;
        background-color: var(--third-bg-color);
        margin: 0.5rem;
        cursor: pointer;
        position: relative;
        color: var(--main-text-color);
        font-weight: 600;
        font-size: 20px;
        box-shadow: 9px 10px 22px -8px var(--darkest-of-the-dark);
        will-change: transform;

        &:hover {
            transform: scale(1.1);
        }
    }
  }

  .flip-enter-active {
    transition: all 0.4s ease;
  }

  .flip-leave-active {
    display: none;
  }

  .flip-enter, .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;

  }


</style>