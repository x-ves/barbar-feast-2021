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
                <iframe width="560" height="315" :src="vidUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <!-- <img class="card__img" :src="imgUrl" /> -->
                <h3>{{ name }}</h3>
                <span>({{ genre }})</span>
            </template>

            <template v-slot:body>
                <p>{{ $t("bands." + id) }}</p>
            </template>

            <template v-slot:footer>
                <button class="arrowButton" @click="$refs.bandModal.closeModal()">
                    <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']"></font-awesome-icon>
                </button>
                <div class="bandModal__socials">
                    <a class="bandModal__socials__icon" target="_blank" v-if="webSite" :href="webSite"><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon></a>
                    <a class="bandModal__socials__icon" target="_blank" v-if="faceBook" :href="faceBook"><font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon></a>
                    <a class="bandModal__socials__icon" target="_blank" v-if="spotify" :href="spotify"><font-awesome-icon :icon="['fab', 'spotify']"></font-awesome-icon></a>
                    <a class="bandModal__socials__icon" target="_blank" v-if="bandCamp" :href="bandCamp"><font-awesome-icon :icon="['fab', 'bandcamp']"></font-awesome-icon></a>
                </div>
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
        imgUrl: String,
        vidUrl: String,
        webSite: String,
        faceBook: String,
        bandCamp: String,
        spotify: String
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
        cursor: pointer;

        &__img {
            object-fit: cover;
            height: 12rem;
            filter: grayscale(100%);
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