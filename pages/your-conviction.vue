<template>

  <sec previous="terms-of-use" next="pii">
    <template slot="title">
      <h4>Your Conviction</h4>
    </template>

      <form>
          <pii-input>Was the court a Missouri circuit (county) court or a municipal (city) court?</pii-input>
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
