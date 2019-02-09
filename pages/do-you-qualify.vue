
<template>
    <div class="container">



        <!--<input-case-fields v-for="(ccase, case_index) in this.$store.getters.allCases" :key="ccase.id" :case_index="case_index" :ccase="ccase">-->
        <!--</input-case-fields>-->

        <!--<add-case></add-case>-->

        <section-do-you-qualify></section-do-you-qualify>
        <section-is-expungeable></section-is-expungeable>
        <section-terms-of-use></section-terms-of-use>
        <section-convictions></section-convictions>d
        <section-charges></section-charges>
        <section-persons-information></section-persons-information>
        <section-print></section-print>
        <section-work-sheet></section-work-sheet>

    </div>


</template>

<script>


    import SectionDoYouQualify from "../components/section-do-you-qualify"
    import SectionIsExpungeable from "../components/section-is-expungeable";
    import SectionTermsOfUse from "../components/section-terms-of-use";
    import SectionConvictions from "../components/section-convictions";
    import SectionCharges from "../components/section-charges";
    import SectionPersonsInformation from "../components/section-persons-information";
    import SectionPrint from "../components/section-print";
    import SectionWorkSheet from "../components/section-work-sheet";
    import InputCaseFields from "../components/input-case-fields";
    import AddCase from "../components/add-case";

    export default {
        components: {
            AddCase,
            InputCaseFields,
            SectionWorkSheet,
            SectionPrint,
            SectionPersonsInformation,
            SectionCharges,
            SectionConvictions,
            SectionTermsOfUse,
            SectionIsExpungeable,
            SectionDoYouQualify}
    }
</script>
