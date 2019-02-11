<template>
    <div style="padding-top: 3em;">

        <h2>Your Personal Information</h2>
        <p style="color: lightcoral;">DEVELOPER NOTE: All of the following personal information is required for the Petition for Expungement</p>


        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">
                <p>&nbsp;</p>
                <pii-input>What is your full name?</pii-input>
                <pii-input>What is your sex?</pii-input>
                <pii-input>What is your race?</pii-input>
                <pii-input>What is your date of birth?</pii-input>
                <pii-input>What is your current address?</pii-input>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <p>Your Driver’s License information?</p>
                <pii-input>License number</pii-input>
                <pii-input>Issuing state</pii-input>
                <pii-input>Expiration date</pii-input>
            </div>
        </div>

    </div>
</template>

<script>
    import PiiInput from "../components/pii-input";

    export default {
        name: "section-persons-information",
        components: {PiiInput},
    }
</script>

