<template>

  <sec previous="terms-of-use" next="terms-of-use">
    <template slot="title">
      <h4>Your Conviction</h4>
    </template>
    <p>This service has been created by the University of Missouri School of Law and Code for KC (Authors) to promote expungement of criminal convictions in Missouri.
        Use of this service is limited to those persons who agree with the terms of use.
        The terms of use that you must agree to if you would like to use this app are as follows: </p>

      <ul>
          <li>Was the court a county circuit court or a municipal court?</li>
          <li>What was the name of the County or City?</li>
          <li>What was the case number?</li>
          <li>What was the name of the Judge</li>
          <li>What was your name as it appeared on the court’s records?</li>
      </ul>


  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion},
    }
</script>
