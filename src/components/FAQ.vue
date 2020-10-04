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
    <details class="FAQ__content">
        <summary class="FAQ__content__question">{{ $t("faq.q5") }}</summary>
        <p class="FAQ__content__answer">{{ $t("faq.a5") }}</p>
    </details>
    <details class="FAQ__content">
        <summary class="FAQ__content__question">{{ $t("faq.q6") }}</summary>
        <p class="FAQ__content__answer">{{ $t("faq.a6") }}</p>
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
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.222);
    padding: 0;

    &__content {

    &__question {
        padding: 0.5rem;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 204, 255);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.1s;

        &:focus {
            outline: none;
        }

        &:hover {
            background-color: rgb(0, 204, 255);
            color: rgb(255, 255, 255);
        }
    }

    &[open] > &__question {
        background-color: rgb(0, 204, 255);
            color: rgb(255, 255, 255);
        }

    &__answer {
        margin: 0;
        padding: 0.5rem 1.5rem;
        background: rgb(250, 250, 250);
        color: rgb(0, 0, 0);
    }
    }
}


</style>