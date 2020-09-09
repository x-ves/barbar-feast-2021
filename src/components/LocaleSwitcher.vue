<template>
    <div class="locale-switcher">
        <select v-model="$i18n.locale">
            <option :value="locale.code" v-for="locale in locales" :key="locale.code"> {{ locale.name }} </option>
        </select>
    </div>
</template>

<script>

import { getSupportedLocales } from "@/util/i18n/supported-locales";
export default {
    data: () => ({ locales: getSupportedLocales() })
}
</script>

<style lang="scss">

.locale-switcher {

    select {
        border: none;
        color: rgb(245, 245, 245);
        background: none;
        padding: 10px;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        outline: none;

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
}
</style>