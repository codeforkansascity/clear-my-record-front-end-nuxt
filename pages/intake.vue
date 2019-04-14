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

            <h3>CONVICTIONS</h3>
            <section-conviction-charges v-bind:client_id="client_id"></section-conviction-charges>
        </div>

        <!--<section-work-sheet></section-work-sheet>-->

        <!--<section-print></section-print>-->


    </div>


</template>

<script>

    import SectionPersonsInformation from "../components/section-persons-information";
    import SectionConvictionCharges from "../components/section-conviction-charges";


    // import SectionConvictions from "../components/section-convictions";
    // import SectionCharges from "../components/section-charges";
    // import SectionPrint from "../components/section-print";
    // import SectionWorkSheet from "../components/section-work-sheet";
    // import InputCaseFields from "../components/input-case-fields";
    // import AuthLogin from "../components/auth-login";

    export default {
        middleware: 'auth',
        components: {
            SectionPersonsInformation,
            SectionConvictionCharges,
            // AuthLogin,
            // InputCaseFields,
            // SectionWorkSheet,
            // SectionPrint,
            // SectionCharges,
            // SectionConvictions
        },
        beforeCreate() {

            // We should have the client populated, if not take the user to the clients
            // page where they can pick one to edit, or create one.

            if ((typeof this.$store.state.client['full_name'] === undefined)
                || (Object.keys(this.$store.state.client).length === 0 && this.$store.state.client.constructor === Object)) {
                this.$router.push('/clients')
            }
        },
        computed: {
            client_id() {
                let x =  this.$store.state.client.id;
                console.log('x=' + x);
                return x;
            }
        },
    }
</script>
