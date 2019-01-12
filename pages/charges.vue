<template>

  <sec previous="your-conviction" next="pii">
    <template slot="title">
      <h4>Criminal Charge</h4>
    </template>

    <form>
      <pii-input>Aprox. Date of Charge</pii-input>
      <pii-input>County/Municipality of Charge</pii-input>
      <pii-input>Description of Charge</pii-input>
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
