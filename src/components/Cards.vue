<template>
    <div class="cards">
        <Card v-bind="card" v-for="card in cards" :key="card.id"/>
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
        BandModal

<style scoped>
    .cards {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media only screen and (min-width: 768px) {

    }

    @media only screen and (min-width: 1024px) {

    }

    @media only screen and (min-width: 1440px) {

    }
</style>