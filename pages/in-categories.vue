<template>
    <one-question previous="no-legal-advice" next="ask-to-search">
        <template slot="title">
            <h4>Was the offense in one of these general categories?
            </h4>
        </template>
        <template slot="text">
            <ul>
                <li>Elections</li>
                <li>Fraud</li>
                <li>Weapons</li>
                <li>HIV Infection</li>
                <li>Kidnapping</li>
                <li>Violating Court Order</li>
                <li>Arson</li>
                <li>Extreme Person/Property Crime</li>
                <li>Terrorism</li>
                <li>Perjury</li>
                <li>Interference with Legal Process</li>
                <li>Abortion</li>
            </ul>
        </template>
        <template slot="answer">
            My convitions were not in the above categories [poorly worded]
        </template>
    </one-question>
</template>

<script>
    import OneQuestion from "../components/one-question";

    export default {
        components: {OneQuestion},
    }
</script>
