<template>
    <a href="https://www.ticketer.ee/barbar-feast-2021" target="_blank" class="ticketsButton">{{ $t("content.tickets") }}</a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .ticketsButton {
        width: fit-content;
        margin: 1rem auto;
        padding: 0.25rem;
        font-size: 1.5rem;
        text-decoration: none;
        color: rgb(0, 204, 255);
        border: 2px solid rgb(0, 204, 255);
        border-radius: 3px;
        transition: all 0.3s;
        text-transform: uppercase;
        font-weight: 400;

        &:hover {
            color: white;
            background: rgb(0, 204, 255);
        }
    }
</style>