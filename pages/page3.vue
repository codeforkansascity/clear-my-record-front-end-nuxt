<template>

    <sec previous="page2" next="start-application">
        <template slot="title">
            <h4>Is the Offense Excluded from Expungement?</h4>
        </template>
        <p>Certain offenses may not be expunged. </p>

        <p>To be expunged, an offense may not be:</p>

        <disqualifying-question questionname="classA">
            Class A or dangerous felony
        </disqualifying-question>

        <disqualifying-question questionname="death">
            Where a death occurred.
        </disqualifying-question>

        <disqualifying-question questionname="felonyAssault">
            Felony Assault or kidnapping
        </disqualifying-question>

        <disqualifying-question questionname="domesticAssault">
            Domestic Assault
        </disqualifying-question>

        <disqualifying-question questionname="intoxicated">
            Operating transport while intoxicated
        </disqualifying-question>

        <disqualifying-question questionname="cdl">
            Violation of motor vehicle ordinance/law while CDL
        </disqualifying-question>


        <template slot="note">
            <p><i>
                [If they hit “Next” and there is a “Yes” in any answer:]
                NEW PAGE You May Have an Offense that May Not Be Expunged
                [Based upon the information you provided, you do not appear to meet the requirements to obtain an
                expungement.
                You may want to consult with an attorney to see what options might be available to you. </i></p>
        </template>
    </sec>

</template>

<script>
    import Sec from "../components/sec";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion},
    }
</script>
