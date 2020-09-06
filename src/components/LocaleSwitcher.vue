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

<style lang="css">
    select {
        border: none;
        padding: 10px;
        color: white;
        background: none;
        font-size: 1rem;
    }

    select:hover {
        cursor: pointer;
        background-color:  rgba(46, 111, 168, 0.333);
    }

    option {
        background-color: white;
        color: black;
    }
</style>