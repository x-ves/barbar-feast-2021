<template>
    <a href="https://www.ticketer.ee/barbar-feast-2021" target="_blank" class="ticketsButton">{{ $t("content.tickets") }}</a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .ticketsButton {
        width: 100%;
        margin: 1rem auto;
        padding: 0.25rem;
        font-size: 2rem;
        text-decoration: none;
        color: var(--main-text-color);
        background: linear-gradient(var(--main-btn-bg), var(--secondary-btn-bg));
        border-radius: 3px;
        transition: all 0.3s;
        text-transform: uppercase;
        font-weight: 600;

        &:hover {
            color: white;
            box-shadow: 0px 0px 5px var(--secondary-btn-bg);
        }
    }

    @media only screen and (min-width: 768px) {
        .ticketsButton {
            font-size: 2.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {

    }
</style>