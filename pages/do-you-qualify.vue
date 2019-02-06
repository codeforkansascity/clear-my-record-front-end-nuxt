
<template>
    <div class="container">

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

    export default {
        components: {
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
