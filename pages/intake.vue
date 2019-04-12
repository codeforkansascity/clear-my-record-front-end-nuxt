
<template>
    <div class="container">
        <div style="padding-top: 3em;">
            <h2>Expungie Information</h2>
                <section-persons-information></section-persons-information>
        </div>

        <!--<section-convictions></section-convictions>-->
        <!--<section-charges></section-charges>-->

        <div style="padding-top: 3em;">
            <h2>What are your conviction and charge details?</h2>

            <h3>CONVICTION</h3>
            <section-case-charges></section-case-charges>
        </div>

        <!--<section-work-sheet></section-work-sheet>-->

        <!--<section-print></section-print>-->


    </div>


</template>

<script>

    import SectionConvictions from "../components/section-convictions";
    import SectionCharges from "../components/section-charges";
    import SectionPersonsInformation from "../components/section-persons-information";
    import SectionPrint from "../components/section-print";
    import SectionWorkSheet from "../components/section-work-sheet";
    import InputCaseFields from "../components/input-case-fields";
    import AddCase from "../components/add-case";
    import SectionCaseCharges from "../components/section-case-charges";
    import AuthLogin from "../components/auth-login";

    export default {
        components: {
            AuthLogin,
            SectionCaseCharges,
            AddCase,
            InputCaseFields,
            SectionWorkSheet,
            SectionPrint,
            SectionPersonsInformation,
            SectionCharges,
            SectionConvictions}
    }
</script>
