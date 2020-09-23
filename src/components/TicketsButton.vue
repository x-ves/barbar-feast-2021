<template>
    <a href="#" class="ticketsButton">{{ $t("content.tickets") }}</a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .ticketsButton {
        padding: 0.25rem;
        font-size: 1.5rem;
        text-decoration: none;
        color: rgb(0, 204, 255);
        border: 2px solid rgb(0, 204, 255);
        border-radius: 3px;
        transition: all 0.3s;

        &:hover {
            color: white;
            background: rgb(0, 204, 255);
        }
    }
</style>