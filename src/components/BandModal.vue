<template>
    <transition name="fade">
        <div class="modal" v-if="showModal">

            <div class="modal__backdrop" @click="closeModal()"/>

            <div class="modal__dialog">

                <div class="modal__header">
                    <button type="button" class="modal__close" @click="closeModal()">x</button>
                    <slot name="header"/>
                </div>

                <div class="modal__body">
                    <slot name="body"/>
                </div>

                <div class="modal__footer">
                    <slot name="footer"/>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "BandModal",
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
            document.querySelector("body").classList.remove("overflow-hidden");
        },
        openModal() {
            this.showModal = true;
            document.querySelector("body").classList.add("overflow-hidden");
        }
    }
}
</script>

<style lang="scss">

    .modal {
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;

        &__backdrop {
            background: rgba(0, 0, 0, 0.3);
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
        }

        &__dialog {
            background: rgb(253, 253, 253);
            position: relative;
            width: 600px;
            margin: 5rem auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            z-index: 2;

            @media screen and (max-width: 992px) {
                width: 90%;
            }
        }

        &__close {
            align-self: flex-end;
            position: absolute;
            width: 30px;
            height: 30px;
            border: none;
            border-radius: 0;
            color:rgb(253, 253, 253);
            background: rgba(255, 255, 255, 0.3);
            font-weight: 700;
            font-size: 1.5rem;
            vertical-align: middle;
            cursor: pointer;
        }

        &__header {
            display: flex;
            flex-direction: column;

            h3 {
                margin: 0.5rem 0 0 0;
                font-size: 2rem;
                text-transform: uppercase;
                color: rgb(0, 205, 255);
                text-align: center;
            }

            span {
                margin: 0;
                text-align: center;
            }

            img {
                height: 18rem;
            }
        }

        &__body {
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        &__footer {
            padding: 10px 20px 20px;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

</style>