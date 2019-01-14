<template>
    <div class="container">

        <h4>Work Sheet of Cases</h4>


        <cases v-for="ccase in this.$store.getters.allCases" :key="ccase.id" :ccase="ccase" />


    </div>
</template>

<script>

    import Cases from "../components/cases";

    export default {
        components: {Cases},


    }
</script>
