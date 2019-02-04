<template>
        <two-panels style="padding-top: 30px;">
            <template slot="left">
                <h3 style="padding-bottom: 30px; font-weight: bold;">Is a crime on your record preventing you from getting a job, housing, or other things you need?</h3>
                <p>The State of Missouri allows some criminal offenses to be expunged from your criminal record. This means that the record is closed and you are able to honestly say “no” to whether you have the conviction almost all the time. The state even provides a self-help form for you to fill out and file.</p>
                <a class="btn btn-secondary btn-sm"
                   href="/do-you-qualify">Find out if you qualify
                </a>
            </template>
            <template slot="right">
                <h5>THIS IS HOW IT WORKS</h5>
                <ul>
                    <li>See if you qualify for expungement</li>
                    <li>Give us some information about you and your conviction</li>
                    <li>We'll generate a completed application </li>
                    <li>Print and submit the application</li>
                </ul>
            </template>
        </two-panels>
</template>

<script>
    import TwoPanels from "../components/two-panels";



    export default {
        components: {TwoPanels},
        mounted: function () {
            // this.$store.dispatch('clearAll');

            var x = this.$store.getters.allCases;
            console.dir(x);
            console.log('-----------------------------');
        }
    }
</script>
