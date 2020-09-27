<template>
    <ul class="bandList">
        <li class="bandList__item" v-bind="band" v-for="band in bands" :key="band.id">{{ band.name }}</li>
    </ul>
</template>

<script>
export default {
    data: () => ({
        bands: []
    }),

    created() {
        fetch("/data.json")
        .then(response => response.json())
        .then(data => this.bands = data)
    }
}
</script>

<style lang="scss">

    .bandList {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 95%;

        &__item {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1.25rem;
            color: black;
        }

        &__item:first-of-type::before {
            content: "";
        }

        &__item::before {
            content: "★";
            color: rgba(0, 204, 255, 0.666);
            // color: rgb(248, 1, 0);
            transform: rotate(180deg);
            z-index: -1;
            vertical-align: middle;
            margin: 0 0.2rem;
            display: inline-block;
        }
    }

    @media only screen and (min-width: 768px) {
        .bandList {
            width: 65%;
            margin: 0 auto;
        }
    }

</style>