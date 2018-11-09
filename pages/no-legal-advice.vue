<template>
    <one-question previous="privacy" next="in-categories">
        <template slot="title">
            <h4>No Legal Advice</h4>
        </template>
        <template slot="text">
            <ul>
                <li>Do you understand that you will not be receiving legal advice from this?
                </li>
                <li>Do you understand that this is not acting as an attorney and can’t give you legal advice?
                </li>
            </ul>
        </template>
        <template slot="answer">
            I agree, I understand, and am ready to continue
        </template>
    </one-question>
</template>

<script>
    import OneQuestion from "../components/one-question";

    export default {
        components: {OneQuestion},
    }
</script>
