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
        font-size: 2.5rem;
        text-decoration: none;
        color: var(--darkest-of-the-dark);
        border: 1rem dashed var(--darkest-of-the-dark);
        background: rgba(49, 5, 5, 0.3);
        border-radius: 3px;
        transition: all 0.3s;
        text-transform: uppercase;
        font-weight: 600;

        &:hover {
            color: white;
            background: var(--darkest-of-the-dark);
        }
    }
</style>