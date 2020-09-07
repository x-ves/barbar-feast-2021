<template>
    <footer>
        <div class="footer">
            <div class="footer__info">
                <img :src="'barbarprofiilikas.png'" alt="BarBar logo">
                <div class="footer__info__contacts">
                    <h3>{{ $t("footer.msg") }}</h3>
                    <br>
                    <p>
                    {{ $t("footer.gsm") }}: <strong><a href="tel:+37258518184">+372 5851 8184</a></strong> <br>
                    {{ $t("footer.mail") }}: <strong><a href="mailto:barbarestonia@gmail.com">barbarestonia@gmail.com</a></strong>
                    </p>
                </div>
                <div class="footer__info__socials">
                    <font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon><a href="https://www.facebook.com/barbarestonia/" target="_blank"><span class="socsp"> @barbarestonia</span></a> <br>
                    <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon><a href="https://www.instagram.com/barbarestonia/" target="_blank"><span class="socsp"> @barbarestonia</span></a> <br>
                    <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon><a href="https://www.instagram.com/barbarfeast/" target="_blank"><span class="socsp"> @barbarfeast</span></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.footer {
    background: linear-gradient(rgb(90, 199, 227), rgb(46, 112, 168));
    width: 100%;
    margin: 2rem 0 0 0;
    padding: 1.5rem 0;
    text-align: center;
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-content: center;

    &__info {
        width: 80%;
        line-height: 1.25;

        img {
            width: 200px;
            height: 200px;
        }

        &__contacts {
            height: fit-content;
            width: 38rem;

            a {
                text-decoration: none;
                color: rgb(255, 255, 255);
                font-weight: 500;

                &:hover {
                    color: rgb(235, 235, 235);
                }
            }
        }

        &__socials {
            text-align: left;
            width: fit-content;
            height: fit-content;

        a {
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-weight: 500;

            &:hover {
                color: rgb(235, 235, 235);
            }
        }
        }
    }
}


@media only screen and (min-width: 768px) {

    .footer__info {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .footer__info__contacts {
        display: inline;
        white-space: nowrap;

        .socsp {
            display: inline;
            white-space: nowrap;
        }
    }
}


@media only screen and (min-width: 1024px) {

    .footer__info {
        img {
            width: 100px;
            height: 100px;
        }
    }

}


@media only screen and (min-width: 1440px) {
}

</style>