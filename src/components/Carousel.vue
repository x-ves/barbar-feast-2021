<template>
    <div class="carousel__view">
        <transition-group
            class="carousel"
            tag="div"
        >
            <div
                v-for="slide in slides"
                class="slide"
                :key="slide.id"
            >
                <img class="slide__img" :src="slide.imgUrl" />
            </div>
        </transition-group>
        <div class="carousel__controls">
            <button class="carousel__controls__button" @click="previous">◀</button>
            <button class="carousel__controls__button" @click="next">▶</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    id: 1,
                    imgUrl: "https://www.viikingitekyla.ee/wp-content/uploads/2017/02/20130528_205203.jpg"
                },
                {
                    id: 2,
                    imgUrl: "https://www.viikingitekyla.ee/wp-content/uploads/2017/01/2-9.jpg"
                },
                {
                    id: 3,
                    imgUrl: "https://www.viikingitekyla.ee/wp-content/uploads/2017/01/2-1.jpg"
                },
                {
                    id: 4,
                    imgUrl: "https://www.viikingitekyla.ee/wp-content/uploads/2017/01/M%C3%A4epealne-katusealune.jpg"
                },
                {
                    id: 5,
                    imgUrl: "https://www.viikingitekyla.ee/wp-content/uploads/2017/01/5.jpg"
                }
            ]
        }
    },

    methods: {
        next() {
            const first = this.slides.shift();
            this.slides = this.slides.concat(first);
        },
        previous() {
            const last = this.slides.pop();
            this.slides = [last].concat(this.slides);
        }
    },

    created() {
    setInterval(this.next, 5000)
    }
}
</script>

<style lang="scss">

    .carousel__view {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        width: 36em;
        min-height: 24em;

        &__controls {
            width: 36em;
            height: 24em;
            position: absolute;
            display: flex;
            justify-content: space-between;

            &:hover button {
                opacity: 1;
            }

            button {
                opacity: 0;
                transition: all 0.3s;
                border: none;
                background: rgba(0, 0, 0, 0.2);
                color: rgba(255, 255, 255, 0.5);
                cursor: pointer;
                font-size: 1.25rem;
                width: 2.5rem;

                &:hover {
                    background: rgba(0, 0, 0, 0.3);
                    color: rgba(255, 255, 255, 0.8)
                }
            }
        }
    }

    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.8s linear;

        &__img {
            object-fit: cover;
            height: 24em;
            width: 36em;
        }

        &:first-of-type, &:last-of-type {
            opacity: 0;
        }
}

</style>