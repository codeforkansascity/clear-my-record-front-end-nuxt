<template>

  <sec previous="/" next="page3">
    <template slot="title">
      <h4>Do you Qualify?</h4>
    </template>
    <p>To qualify, you must be eligible to apply and the offense must be one that may be expunged. </p>

    <p>To be eligible to apply, all of the following must be apply:</p>

      <disqualifying-question questionname="criminalCharge">
          I do not have a pending criminal charge:
          <template slot="help">
              A pending criminal charge is a criminal charge against you that is currently in court and has not been dismissed, you have been found innocent, or you have been found guilty.
          </template>
      </disqualifying-question>

      <disqualifying-question questionname="previously">
          I have not had any charges previously expunged?
          <template slot="help">
              This is the help text
          </template>
      </disqualifying-question>

      <disqualifying-question questionname="obligations">
          I have completed my obligations under the sentence.
          <template slot="help">
              This is the help text
          </template>
      </disqualifying-question>

      <disqualifying-question questionname="felonytime">
          I completed my sentence seven years ago (if a felony).
          <template slot="help">
              This is the help text
          </template>
      </disqualifying-question>

      <disqualifying-question questionname="misdereanortime">
          I completed my sentence three years ago (if a misdemeanor).
          <template slot="help">
              This is the help text
          </template>
      </disqualifying-question>

      <disqualifying-question questionname="moreThanOne">
          What if I have more than one conviction?
          <template slot="help">
              Missouri limits the number of convictions that may be expunged.
              Currently, no more than 1 felony conviction and 3 misdemeanor convictions may be expunged.
              A single conviction may include multiple counts.
              For example, a marijuana conviction including a possession count and a paraphernalia count would be treated as a single conviction to be expunged.
              —NEED TO ADD LANGUAGE THAT SAYS THAT IF YOU HAVE MULTIPLE CONVICTIONS, YOU NEED TO SEEK ADVICE FROM AN ATTORNEY IF YOU WOULD LIKE TO SEEK AN EXPUNGEMENT.
          </template>
      </disqualifying-question>


      <p><i>[If they hit “Next” and there is a “No” in any answer:] H1 You May Not Be Eligible to Apply [Based upon the information you provided, you do not appear to meet the requirements to obtain an expungement. You may want to consult with an attorney to see what options might be available to you.
      </i></p>
      <p><i>[If they hit “Next” and there is not a “ No” in answer answer but there is an “I’m Not Sure” in any answer:] H1 You may be eligible to apply, but because you are not sure, you may not be successful. You should detYou may want to consult with an attorney to see what options might be available to you.
        </i></p>

  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion},
    }
</script>
