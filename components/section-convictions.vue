<template>
    <div>
        <h4>What are your conviction and charge details?</h4>
        <form>
            <input-case-field i="1" f="case_number">Case Number</input-case-field>
            <hr>

            <pii-input group="conviction" questionname="inMo">Was the court a Missouri circuit (county) court or a
                municipal (city) court?
            </pii-input>
            <pii-input group="conviction" questionname="city">What was the name of the County or City?</pii-input>
            <pii-input group="conviction" questionname="case_number">What was the case number?</pii-input>
            <pii-input group="conviction" questionname="judge_name">What was the name of the Judge</pii-input>
            <pii-input group="conviction" questionname="your_name">What was your name as it appeared on the court’s
                records?
            </pii-input>
        </form>
    </div>
</template>

<script>
    import InputCaseField from "../components/input-case-field";
    import PiiInput from "../components/pii-input";

    export default {
        name: "section-convictions",
        components: {InputCaseField, PiiInput},
    }
</script>


