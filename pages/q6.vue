<template>
    <question next="q7">
        <template slot="intro">
            I will be assisting you to gather information and sharing the provisions of law with you. I will not be giving you legal advice.
            <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
        </template>
        <template slot="question">
            Do you understand that I will not be giving you legal advice?
        </template>
        <template slot="answer">
            I understand that I am not receivng legal advice.
        </template>
    </question>


</template>

<script>
    import Question from "../components/question";
    export default {
        name: "q6",
        components: {Question},
        mounted() {
            this.$store.commit('cars/set', [{id: 2, model: "Tacoma", brand: "Toyota"}]);
            console.log('Component mounted.');

        }
    }
</script>

<style scoped>

</style>
