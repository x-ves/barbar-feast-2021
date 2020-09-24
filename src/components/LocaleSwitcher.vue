<template>
    <div class="locale-switcher">
        <select
            :value="$i18n.locale"
            @change.prevent="changeLocale"
        >
            <option :value="locale.code" v-for="locale in locales" :key="locale.code">
                {{ locale.name }}
            </option>
        </select>
        <span class="custom-arrow"></span>
    </div>
</template>

<script>

import { getSupportedLocales } from "@/util/i18n/supported-locales";

export default {
    data: () => ({ locales: getSupportedLocales() }),
    methods: {
        changeLocale(e) {
            const locale = e.target.value;
            this.$router.push(`/${locale}`);
        }
    }
}
</script>

<style lang="scss">

.locale-switcher {
    position: relative;

    select {
        appearance: none;
        border: none;
        color: rgb(245, 245, 245);
        background: none;
        padding: 10px 1.8rem 10px 10px;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        outline: none;
        transition: 0.3s all;

        &:hover {
            cursor: pointer;
            background-color:  rgba(46, 111, 168, 0.333);
        }

        &:focus {
            border: none;
        }

        option {
            background-color: white;
            color: black;
        }
    }

    .custom-arrow {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 100%;
        width: 2rem;
        pointer-events: none; // ei registreeri elemendile vajutamist (st kui vajutan sellelele, vajutan hoopis selectile);

        &::before {
            --size: .35rem;
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            left: 50%;
            top: 54%;
            transform: translate(-50%, -50%);
            border-left: var(--size) solid transparent;
            border-right: var(--size) solid transparent;
            border-top: var(--size) solid rgb(245, 245, 245);
        }
    }
}
</style>