<template>


        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">
                <p>&nbsp;</p>
                <pii-input questionname="full_name">What is your full name?</pii-input>
                <input-sex questionname="sex">What is your sex?</input-sex>
                <input-race questionname="race">What is your race?</input-race>
                <input-date questionname="dob">What is your date of birth?</input-date>
                <pii-input questionname="address">What is your current address?</pii-input>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <p>Your Driver’s License information?</p>
                <pii-input questionname="license_number">License number</pii-input>
                <input-state questionname="license_issuing_state">Issuing state</input-state>
                <input-date questionname="license_expiration_date">Expiration date</input-date>
            </div>
        </div>

    </div>
</template>

<script>
    import PiiInput from "../components/pii-input";
    import InputState from '../components/input-state';
    import InputSex from "../components/input-sex";
    import InputRace from "../components/input-race";
    import InputDate from "./input-date";

    export default {
        name: "section-persons-information",
        components: {InputDate, InputRace, InputSex, PiiInput, InputState},
    }
</script>

