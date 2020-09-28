<template>
<div class="FAQ">
    <details class="FAQ__content">
        <summary class="FAQ__content__question">{{ $t("faq.q1") }}</summary>
        <p class="FAQ__content__answer">{{ $t("faq.a1") }}</p>
    </details>
    <details class="FAQ__content">
        <summary class="FAQ__content__question">{{ $t("faq.q2") }}</summary>
        <p class="FAQ__content__answer">{{ $t("faq.a2") }}</p>
    </details>
        <details class="FAQ__content">
        <summary class="FAQ__content__question">{{ $t("faq.q3") }}</summary>
        <p class="FAQ__content__answer">{{ $t("faq.a3") }}</p>
    </details>
    <details class="FAQ__content">
        <summary class="FAQ__content__question">{{ $t("faq.q4") }}</summary>
        <p class="FAQ__content__answer">{{ $t("faq.a4") }}</p>
    </details>
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.FAQ {
    width: 40rem;
    height: fit-content;
    box-shadow: 0px 0px 3px rgb(155, 155, 155);
    padding: 0;

    &__content {

    &__question {
        padding: 0.5rem;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 110, 255);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s;

        &:focus {
            outline: none;
        }

        &:hover {
            color: rgb(255, 0, 0);
        }
    }

    &[open] > &__question {
            color: rgb(255, 0, 0);
        }

    &__answer {
        margin: 0;
        padding: 0.35rem;
        background: rgb(250, 250, 250);
        color: rgb(0, 0, 0);
    }
    }
}


</style>