<template>
    <div class="container">
        <div style="padding-top: 3em;">
            <section-persons-information></section-persons-information>
        </div>

        <section-conviction-charges v-bind:client_id="client_id"></section-conviction-charges>

        <!--<section-print></section-print>-->
        <section-circuit-information></section-circuit-information>
    </div>
</template>

<script>

    import SectionPersonsInformation from "../components/section-persons-information";
    import SectionConvictionCharges from "../components/section-conviction-charges";
    import SectionCircuitInformation from "../components/section-circuit-information";

    // import SectionPrint from "../components/section-print";

    export default {
        middleware: 'auth',
        components: {
            SectionCircuitInformation,
            SectionPersonsInformation,
            SectionConvictionCharges,
            // SectionPrint,
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
                return this.$store.state.client.id;
            }
        },
    }
</script>
