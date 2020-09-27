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
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.FAQ {
    width: 30rem;
    box-shadow: 0px 0px 3px rgb(205, 205, 205);
    padding: 0;

    &__content {

    &__question {
        padding: 0.25rem;
        background-color: rgb(0, 204, 255);
        color: white;
        font-weight: 500;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    &__answer {
        margin: 0;
        padding: 0.35rem;
    }
    }
}


</style>