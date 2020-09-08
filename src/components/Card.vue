<template>
    <div class="card">
        <img class="card__img" :src="imgUrl" />
        <div class="card__desc">
            <h3>{{ name }}</h3>
            <p>({{ genre }})</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        genre: String,
        imgUrl: String
    }
}
</script>

<style lang="scss">
    .card {
        width: 26rem;
        height: 22rem;
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-transform: capitalize;

        &__desc {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }

    h3 {
        margin: 0;
        padding: 0;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    img {
        object-fit: cover;
        height: 16rem;
    }

    p {
        text-align: center;
        margin: 0;
        padding: 0;
    }
</style>