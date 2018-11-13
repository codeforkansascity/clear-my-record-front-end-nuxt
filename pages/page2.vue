<template>

    <sec previous="/" next="page3">
        <template slot="title">
            <h4>Do you Qualify?</h4>
        </template>
        <p>To qualify, you must be eligible to apply and the offense must be one that can be expunged. </p>

        <p>You may not be eligible to apply if any of the following are true:</p>

        <disqualifying-question questionname="criminalCharge">
            I have a criminal charge pending against me now.
            <template slot="help">
                A pending criminal charge is a criminal charge against you that is currently in court and has not been
                dismissed, you have been found innocent, or you have been found guilty.
            </template>
        </disqualifying-question>

        <disqualifying-question questionname="previously">
            I have had one or more convictions expunged.
            <template slot="help">
                <b>Why does this matter?</b> Missouri limits the number of convictions that can be expunged. Currently,
                no more than 1 felony conviction and 3 misdemeanor convictions can be expunged. A single conviction can
                include multiple counts. For example, a marijuana conviction including a possession count and a
                paraphernalia count would be treated as a single conviction to be expunged.
            </template>
        </disqualifying-question>

        <disqualifying-question questionname="obligations">
            I have not completed all requirements of my sentence.

        </disqualifying-question>

        <disqualifying-question questionname="felonytime">
            I completed my sentence less than seven years ago (if a felony).

        </disqualifying-question>

        <disqualifying-question questionname="misdereanortime">
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
        </div>

        <template slot="note">
            <p><i>[If they hit “Next” and there is a “Yes” in any answer:] H1 You May Not Be Eligible to Apply [Based
                upon the information you provided, you do not appear to meet the requirements to obtain an expungement
                at this time. You may want to consult with an attorney to see what options might be available to you.
            </i></p>
            <p><i>[If they hit “Next” and there is not a “ No” in answer but there is an “I’m Not Sure” in any answer:]
                H1 You may be eligible to apply, but because you are not sure, you may not be successful. You may want
                to consult with an attorney to see what options might be available to you.
            </i></p>
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
