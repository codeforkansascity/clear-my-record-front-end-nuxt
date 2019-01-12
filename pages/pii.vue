<template>

  <sec previous="charges" next="print">
    <template slot="title">
      <h4>Your Personal Information</h4>
    </template>


    <form>
      <pii-input>What is your full name?</pii-input>
      <pii-input>What is your Sex?</pii-input>
      <pii-input>What is your Race? </pii-input>
      <pii-input>What is you Date of Birth?</pii-input>
      <pii-input>What is your current address</pii-input>
      <p>Your Driver’s License information?</p>
      <pii-input>License Number?</pii-input>
      <pii-input>Issuing State?</pii-input>
      <pii-input>Expiration Date?</pii-input>
    </form>

  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import PiiInput from "../components/pii-input";

    export default {
        components: {PiiInput, Sec},
    }
</script>
