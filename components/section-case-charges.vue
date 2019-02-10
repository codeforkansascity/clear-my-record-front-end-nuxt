<template>
    <div style="padding-top: 3em;">


        <h2>What are you conviction and charge details?</h2>

        <h3>CONVICTION</h3>



            <input-case-fields v-for="(ccase, case_index) in this.$store.getters.allCases" :key="ccase.id"
                               :case_index="case_index" :ccase="ccase">
            </input-case-fields>



        <!--<add-case></add-case>-->

    </div>
</template>

<script>
    import InputCaseFields from "./input-case-fields";

    export default {
        name: "section-case-charges",
        components: {InputCaseFields}
    }
</script>

<style scoped>

</style>
