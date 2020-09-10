<template>
    <div class="cards">
        <Card v-bind="card" v-for="card in cards" :key="card.id" />
    </div>
</template>

<script>
import Card from "./Card"
export default {
    data: () => ({
        cards: []
    }),
    created() {
        fetch("/data.json")
        .then(response => response.json())
        .then(data => (this.cards = data))
    },
    components: { Card }
}
</script>

<style scoped>
    .cards {
        width: 90%;
        height: 420rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-content: space-between;
        flex-wrap: wrap;
    }

    @media only screen and (min-width: 768px) {
        .cards {
            height: 245rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        .cards {
            width: 100%;
            height: 170rem;
        }
    }

    @media only screen and (min-width: 1440px) {
        .cards {
            width: 75%;
            height: 175rem;
        }
    }
</style>