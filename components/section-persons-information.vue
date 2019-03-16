<template>
    <div style="padding-top: 3em;">

        <h2>Your Personal Information</h2>

        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">
                <p>&nbsp;</p>
                <pii-input questionname="full_name">What is your full name?</pii-input>
                <input-sex questionname="sex">What is your sex?</input-sex>
                <input-race questionname="race">What is your race?</input-race>
                <pii-input questionname="dob">What is your date of birth?</pii-input>
                <pii-input questionname="address">What is your current address?</pii-input>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <p>Your Driver’s License information?</p>
                <pii-input questionname="license_number">License number</pii-input>
                <input-state questionname="license_issuing_state">Issuing state</input-state>
                <pii-input questionname="license_expiration_date">Expiration date</pii-input>
            </div>
        </div>

    </div>
</template>

<script>
    import PiiInput from "../components/pii-input";
    import InputState from '../components/input-state';
    import InputSex from "../components/input-sex";
    import InputRace from "../components/input-race";

    export default {
        name: "section-persons-information",
        components: {InputRace, InputSex, PiiInput, InputState},
    }
</script>

