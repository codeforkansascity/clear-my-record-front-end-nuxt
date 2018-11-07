<template>
    <question previous="q7">
        <template slot="intro">
            The information gathered from you will be kept private and confidential as explained in the Privacy Policy you received. I am not an attorney, so the information you provide is not privileged.
        </template>
        <template slot="question">
            Do you understand the privacy policy? Are the terms of the privacy policy acceptable to you? Would it be acceptable to you if the School of Law maintains a record of your name and contact information?
        </template>
        <template slot="answer">
            I understand
        </template>
    </question>


</template>

<script>
    import Question from "../components/question";
    export default {
        name: "q8",
        components: {Question}
    }
</script>

<style scoped>

</style>
