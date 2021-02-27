<template>
    <div class="program">
        <h1>{{ $t("content.construction") }}</h1>
        <img src="/metalconstruction.gif" alt="">
    </div>
</template>

<script>
export default {
    name: "Program"
}
</script>

<style lang="scss">
    .program {
        padding: 3rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--secondary-bg-color);

        img {
            width: 650px;
        }
    }
</style>