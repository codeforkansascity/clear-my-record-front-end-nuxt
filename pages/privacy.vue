<template>
    <one-question previous="disqualifying-questions" next="no-legal-advice">
        <template slot="title">
            <h4>Privacy Policy</h4>
        </template>
        <template slot="text">
            <ul>
                <li>If eligible, personal information provided will be kept and stored.</li>
                <li>If ineligible, only nonpersonal information will be kept and stored for data purposes.</li>
                <li>Cont……</li>
            </ul>
        </template>
        <template slot="answer">
            Yes, I agree to the terms and conditions of the privacy policy
        </template>
    </one-question>
</template>

<script>
    import OneQuestion from "../components/one-question";

    export default {
        components: {OneQuestion},
    }
</script>
