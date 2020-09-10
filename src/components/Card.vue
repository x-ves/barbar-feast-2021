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
        margin: 0.5rem;
        width: 18rem;
        height: 16rem;
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-transform: capitalize;

        &__img {
            object-fit: cover;
            height: 12rem;
        }

        &__desc {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            h3 {
                margin: 0;
                padding: 0;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            p {
                text-align: center;
                margin: 0;
                padding: 0;
            }
        }
    }

     @media only screen and (min-width: 768px) {

        .card {
            width: 20rem;
            height: 18rem;

            &__img {
                height: 14rem;
            }
        }

    }

    @media only screen and (min-width: 1024px) {

    }

    @media only screen and (min-width: 1440px) {

    }
</style>