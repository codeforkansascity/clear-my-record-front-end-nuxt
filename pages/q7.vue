<template>
    <question previous="q6" next="q8">
        <template slot="intro">
            (If applicable) I am also not an attorney.
            <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
            <button @click="$store.commit('addthings',{ idi: 'pot' })">pppp}</button>
            <nuxt-link to="/q6">q6</nuxt-link>
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
          //  this.$store.commit('cars/set', [{id: 3, model: "Tacoma", brand: "Toyota"}]);

            var x='';
            console.log('-----------------------------');
            this.$store.dispatch('storeQuestion', { questions: 'name', anaser: 'paul' })

     x = JSON.stringify(this.$store.getters.allQuestions);
            console.dir(x);
            console.log('-----------------------------');

        }
    }
</script>

<style scoped>

</style>
