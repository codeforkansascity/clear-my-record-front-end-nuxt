<template>

    <div>
        <input-case-fields v-for="(ccase, case_index) in this.$store.getters.allCases" :key="ccase.id"
                           :case_index="case_index" :ccase="ccase">
        </input-case-fields>
        <add-case></add-case>
    </div>

</template>

<script>
    import InputCaseFields from "./input-case-fields";
    import AddCase from "./add-case";

    export default {
        name: "section-case-charges",
        components: {InputCaseFields,AddCase}
    }
</script>


