<template>

    <sec previous="page2" next="start-application">
        <template slot="title">
            <h4>Is the Offense Excluded from Expungement?</h4>
        </template>
        <p>Certain offenses, like those listed on this page, cannot be expunged. </p>

        <p>To be expunged, an offense may not be:</p>

        <disqualifying-question group="are-you-excluded" questionname="classA">
            A Class A or dangerous felony?
        </disqualifying-question>

        <disqualifying-question group="are-you-excluded" questionname="death">
            A crime where a death occurred?
        </disqualifying-question>

        <disqualifying-question group="are-you-excluded" questionname="felonyAssault">
            Felony Assault or kidnapping?
        </disqualifying-question>

        <disqualifying-question group="are-you-excluded" questionname="domesticAssault">
            Domestic Assault?
        </disqualifying-question>

        <disqualifying-question group="are-you-excluded" questionname="intoxicated">
            Operating a car, boat, or plane while intoxicated?
        </disqualifying-question>

        <disqualifying-question group="are-you-excluded" questionname="cdl">
            A violation of a motor vehicle ordinance/law while CDL?
        </disqualifying-question>

        <div class="row">
            <div class="col-sm-12 ques">
                <div class="col-sm-12 ques">
                    <p v-if="numberOfYes || numberOfUnknown" class="alert-warning">You May Have an Offense that May Not
                        Be Expunged [Based upon the information you provided, you do not appear to meet the requirements
                        to obtain an expungement. You may want to consult with an attorney to see what options might be
                        available to you.
                    </p>
                </div>
            </div>
        </div>

    </sec>

</template>

<script>
    import Sec from "../components/sec";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion},
        computed: {
            numberOfNotNo: function() {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'No' && item.group === 'are-you-excluded' ? 1 : 0)
                    , 0);
            },
            numberOfYes: function() {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'Yes' && item.group === 'are-you-excluded' ? 1 : 0)
                    , 0);
            },
            numberOfUnknown: function() {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'Unknown' && item.group === 'are-you-excluded' ? 1 : 0)
                    , 0);
            }
        }
    }
</script>
