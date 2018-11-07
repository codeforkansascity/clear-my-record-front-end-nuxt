<template>
    <question previous="q6" next="q8">
        <template slot="intro">
            (If applicable) I am also not an attorney.
        </template>
        <template slot="question">
            Do you understand that I am not an attorney?
        </template>
        <template slot="answer">
            I understand that you are not an attorney.
        </template>
    </question>


</template>

<script>
    import Question from "../components/question";
    export default {
        name: "q7",
        components: {Question},
        mounted() {
            this.$store.commit('cars/set', [{id: 3, model: "Tacoma", brand: "Toyota"}]);
            console.log('Component mounted.');

        }
    }
</script>

<style scoped>

</style>
