<template>

  <sec previous="terms-of-use" next="pii">
    <template slot="title">
      <h4>Your Conviction</h4>
    </template>
    <p>This service has been created by the University of Missouri School of Law and Code for KC (Authors) to promote expungement of criminal convictions in Missouri.
        Use of this service is limited to those persons who agree with the terms of use.
        The terms of use that you must agree to if you would like to use this app are as follows: </p>

      <form>
          <pii-input>Was the court a county circuit court or a municipal court?</pii-input>
          <pii-input>What was the name of the County or City?</pii-input>
          <pii-input>What was the case number?</pii-input>
          <pii-input>What was the name of the Judge</pii-input>
          <pii-input>What was your name as it appeared on the court’s records?</pii-input>
      </form>

  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import PiiInput from "../components/pii-input";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion, PiiInput},
    }
</script>
