<template>
<div>
    <h2>Cases</h2>

    <cases v-for="ccase in this.$store.getters.allCases" :key="ccase.id"  :ccase="ccase">

    </cases>

</div>
</template>

<script>
    import Cases from "../components/cases";
    export default {
        name: "section-work-sheet",
        components: {Cases},
    }
</script>

<style scoped>

</style>
