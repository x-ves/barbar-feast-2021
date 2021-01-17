<template>
    <div>
    <div class="card" @click="$refs.bandModal.openModal()">
        <img class="card__img" :src="imgUrl" />
        <div class="card__desc">
            <h3>{{ name }}</h3>
            <p>({{ genre }})</p>
        </div>
    </div>
    <band-modal ref="bandModal">
            <template v-slot:header>
                <h1>{{ name }}</h1>
            </template>

            <template v-slot:body>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos consequuntur velit, harum nobis fuga laboriosam. Officia consequatur commodi explicabo eum asperiores deserunt? Nesciunt esse commodi, doloribus labore consequatur illum temporibus?</p>
            </template>

            <template v-slot:footer>
                <button @click="$refs.bandModal.closeModal()">Close Modal</button>
            </template>
        </band-modal>
    </div>
</template>

<script>
import BandModal from "./BandModal";

export default {
    components: { BandModal },
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
        background: rgba(255, 255, 255, 0.5);
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