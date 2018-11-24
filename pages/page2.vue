<template>

    <sec previous="/" next="page3">
        <template slot="title">
            <h4>Do you Qualify?</h4>
        </template>
        <p>To qualify, you must be eligible to apply and the offense must be one that can be expunged. </p>

        <p>You may not be eligible to apply if any of the following are true:</p>

        <h1>Yes={{ numberOfYes  }}</h1>
        <h1>No={{ numberOfNotNo  }}</h1>
        <h1>Unknown{{ numberOfUnknown  }}</h1>

        <disqualifying-question group="do-you-qualify" questionname="criminalCharge">
            I have a criminal charge pending against me now.
            <template slot="help">
                A pending criminal charge is a criminal charge against you that is currently in court and has not been
                dismissed, you have been found innocent, or you have been found guilty.
            </template>
        </disqualifying-question>

        <disqualifying-question group="do-you-qualify" questionname="previously">
            I have had one or more convictions expunged.
            <template slot="help">
                <b>Why does this matter?</b> Missouri limits the number of convictions that can be expunged. Currently,
                no more than 1 felony conviction and 3 misdemeanor convictions can be expunged. A single conviction can
                include multiple counts. For example, a marijuana conviction including a possession count and a
                paraphernalia count would be treated as a single conviction to be expunged.
            </template>
        </disqualifying-question>

        <disqualifying-question group="do-you-qualify" questionname="obligations">
            I have not completed all requirements of my sentence.
        </disqualifying-question>

        <disqualifying-question group="do-you-qualify" questionname="felonytime">
            I completed my sentence less than seven years ago (if a felony).
        </disqualifying-question>

        <disqualifying-question group="do-you-qualify" questionname="misdereanortime">
            I completed my sentence less than three years ago (if a misdemeanor).
        </disqualifying-question>


        <div class="row">
            <div class="col-sm-12 ques">
                <p><b>What if I have more than one conviction?</b></p>
                <p>Missouri limits the number of convictions that can be expunged. Currently, no more than 1 felony
                    conviction and 3 misdemeanor convictions can be expunged. A single conviction can include multiple
                    counts. For example, a marijuana conviction including a possession count and a paraphernalia count
                    would be treated as a single conviction to be expunged.</p>
                <p>IF YOU HAVE MORE THAN ONE CONVICTION, SEEKING AN EXPUNGEMENT IS DIFFICULT AND YOU SHOULD GET ADVICE
                    FROM AN ATTORNEY. </p>
            </div>

            <div class="col-sm-12 ques">
                <p v-if="numberOfYes" class="alert-warning">You May Not Be Eligible to Apply Based
                    upon the information you provided, you do not appear to meet the requirements to obtain an expungement
                    at this time. You may want to consult with an attorney to see what options might be available to you.
                </p>
            </div>

            <div class="col-sm-12 ques">
                <p v-if="numberOfUnknown" class="alert-warning">
                    You may be eligible to apply, but because you are not sure, you may not be successful. You may want
                    to consult with an attorney to see what options might be available to you.
                </p>
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
                    (accumulator, item) => accumulator += (item.answer === 'No' && item.group === 'do-you-qualify' ? 1 : 0)
                    , 0);
            },
            numberOfYes: function() {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'Yes' && item.group === 'do-you-qualify' ? 1 : 0)
                    , 0);
            },
            numberOfUnknown: function() {
                var all = this.$store.getters.allQuestions;
                return all.reduce(
                    (accumulator, item) => accumulator += (item.answer === 'Unknown' && item.group === 'do-you-qualify' ? 1 : 0)
                    , 0);
            }
        }
    }
</script>
