<template>
    <div class="info">
        <h1>{{ $t("content.construction") }}</h1>
        <img src="/metalconstruction.gif" alt="">
    </div>
</template>

<script>
export default {
    name: "Info"
}
</script>

<style lang="scss">
    .info {
        padding: 3rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 650px;
        }
    }
</style>