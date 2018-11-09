<template>
    <one-question previous="page2" next="disqualifying-questions">
        <template slot="title">
            <h4>How many cases?</h4>
        </template>
        <template slot="text">
            <p>At this time we can only help you if you have a single conviction.
                If you have more than one conviction please ...</p>

        </template>
        <template slot="answer">
            I only have one conviction.
        </template>
    </one-question>
</template>

<script>
    import OneQuestion from "../components/one-question";

    export default {
        components: {OneQuestion},
    }
</script>
