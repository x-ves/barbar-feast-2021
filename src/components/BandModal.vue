<template>
    <transition name="fade">
        <div class="modal" v-if="showModal">

            <div class="modal__backdrop" @click="closeModal()"/>

            <div class="modal__dialog">

                <div class="modal__header">
                    <button type="button" class="modal__close" @click="closeModal()">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </button>
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
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
        }

        &__dialog {
            background: var(--darkest-of-the-dark);
            position: relative;
            width: fit-content;
            max-width: 600px;
            margin: 5rem auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            z-index: 2;

            @media screen and (max-width: 992px) {
                width: 95%;
            }
        }

        .arrowButton {
            color: var(--secondary-text-color);
            border: none;
            background: transparent;
            font-size: 2.5rem;
            height: 1rem;
            width: fit-content;
            outline: none;
            cursor: pointer;
            transition: color 0.2s;

            &:hover {
                color: var(--hover-text-color);
            }
        }

        .bandModal {

            &__socials {
                width: fit-content;
                display: flex;
                justify-content: space-evenly;

                &__icon {
                    color: var(--secondary-text-color);
                    font-size: 1.5rem;
                    margin: 0 0.15rem;
                    cursor: pointer;
                    transition: color 0.2s;
                    vertical-align: middle;

                    &:hover {
                        color: var(--hover-text-color);
                    }
                }
            }
        }

        &__close {
            align-self: flex-end;
            position: absolute;
            width: 35px;
            height: 35px;
            border: none;
            color:rgba(253, 253, 253, 0.7);
            background: rgba(255, 255, 255, 0.1);
            font-size: 1.25rem;
            cursor: pointer;
            transition: all 0.2s;
            z-index: 2;
            outline: none;

            &:hover {
                background: rgba(255, 255, 255, 0.3);
                color: rgba(253, 253, 253, 1);
            }
        }

        &__header {
            display: flex;
            flex-direction: column;

            h3 {
                margin: 0.5rem 0 0 0;
                font-size: 2rem;
                text-transform: uppercase;
                color: var(--secondary-text-color);
                text-align: center;
            }

            span {
                margin: 0;
                text-align: center;
                text-transform: capitalize;
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
            text-align: center;
            width: 90%;
            align-self: center;
        }

        &__footer {
            padding: 10px 20px 20px;
            display: flex;
            justify-content: space-between;
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