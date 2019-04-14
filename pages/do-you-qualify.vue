<template>
    <div class="container">

        <section-do-you-qualify></section-do-you-qualify>

        <section-is-expungeable></section-is-expungeable>
        <section-terms-of-use></section-terms-of-use>
        <div style="padding-top: 3em;">
            <h2>Your Personal Information</h2>
        </div>
        <section-persons-information></section-persons-information>


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
    import SectionConvictionCharges from "../components/section-conviction-charges";
    import AuthLogin from "../components/auth-login";

    export default {
        components: {
            AuthLogin,
            SectionConvictionCharges,
            SectionWorkSheet,
            SectionPrint,
            SectionPersonsInformation,
            SectionCharges,
            SectionConvictions,
            SectionTermsOfUse,
            SectionIsExpungeable,
            SectionDoYouQualify
        }
    }
</script>
