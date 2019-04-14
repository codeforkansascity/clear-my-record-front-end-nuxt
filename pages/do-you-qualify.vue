
<template>
    <div class="container">


        <!--<input-case-fields v-for="(ccase, case_index) in this.$store.getters.allCases" :key="ccase.id" :case_index="case_index" :ccase="ccase">-->
        <!--</input-case-fields>-->

        <!--<add-case></add-case>-->

            <section-do-you-qualify></section-do-you-qualify>

        <section-is-expungeable></section-is-expungeable>
        <section-terms-of-use></section-terms-of-use>
        <div style="padding-top: 3em;">
            <h2>Your Personal Information</h2>
        </div>
        <section-persons-information></section-persons-information>

        <!--<section-convictions></section-convictions>-->
        <!--<section-charges></section-charges>-->
        <div style="padding-top: 3em;">
            <h2>What are you conviction and charge details?</h2>

            <h3>CONVICTION</h3>
        <section-convction-charges></section-convction-charges>
        </div>

        <section-work-sheet></section-work-sheet>

        <section-print></section-print>


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
    //import InputCaseFields from "../components/input-case-fields";
    // import AddCase from "../components/add-case";
    import SectionConvictionCharges from "../components/section-conviction-charges";
    import AuthLogin from "../components/auth-login";

    export default {
        components: {
            AuthLogin,
            SectionConvictionCharges,
            // AddCase,
            //InputCaseFields,
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
