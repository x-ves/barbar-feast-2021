<template>
    <footer>
        <div class="footer">
            <img src="@/assets/barbarprofiilikas.png" alt="BarBar logo">
            <div class="footer__contacts">
                <p>{{ $t("footer.msg") }}</p>
                <br>
                <p>
                {{ $t("footer.gsm") }}: <strong><a href="tel:+37258518184">+372 5851 8184</a></strong> <br>
                {{ $t("footer.mail") }}: <strong><a href="mailto:barbarestonia@gmail.com">barbarestonia@gmail.com</a></strong>
                </p>
            </div>
            <div class="footer__socials">
                <span class="socsp"><font-awesome-icon class="footer__socials__icon" :icon="['fab', 'facebook-square']"></font-awesome-icon><a href="https://www.facebook.com/barbarestonia/" target="_blank">@barbarestonia</a></span>
                <span class="socsp"><font-awesome-icon class="footer__socials__icon" :icon="['fab', 'instagram']"></font-awesome-icon><a href="https://www.instagram.com/barbarestonia/" target="_blank">@barbarestonia</a></span>
                <span class="socsp"><font-awesome-icon class="footer__socials__icon" :icon="['fab', 'instagram']"></font-awesome-icon><a href="https://www.instagram.com/barbarfeast/" target="_blank">@barbarfeast</a></span>
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
    width: 100%;
    background: linear-gradient(rgb(90, 199, 227), rgb(46, 112, 168));
    margin: 2rem 0 0 0;
    padding: 1.5rem 0;
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    font-size: 0.9rem;

        img {
            width: 200px;
            height: 200px;
        }

        &__contacts {
            height: 8rem;
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            p {
                word-wrap: break-word;
            }

            a {
                text-decoration: none;
                color: rgb(255, 255, 255);
                font-weight: 500;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__socials {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            text-align: left;
            width: fit-content;
            height: 6rem;

        a {
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-weight: 500;

            &:hover {
                text-decoration: underline;
            }
        }

        &__icon {
            margin-right: 0.25rem;
            font-size: 1.25rem;
            vertical-align: middle;
        }
        }
    }


@media only screen and (min-width: 768px) {

    .footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
}


@media only screen and (min-width: 1024px) {

    .footer {
        flex-direction: row;

        img {
            height: 125px;
            width: 125px;
        }

        &__contacts {
            width: fit-content;
        }
    }

}


@media only screen and (min-width: 1440px) {
}

</style>