<template>
    <input-case-fields v-for="ccase in this.$store.getters.allCases, index" :key="ccase.id"  :ccase="ccase">

    </input-case-fields>

</template>

<script>
    import InputCaseFields from "./input-case-fields";
    export default {
        name: "input-cases",
        components: {InputCaseFields}
    }
</script>

<style scoped>

</style>
