<template>

  <sec previous="in-categories" next="additional-pii">
    <template slot="title">
      <h4>Collection of Personal Information</h4>
    </template>


    <form>
      <pii-input>Name</pii-input>
      <pii-input>Other Names/Aliases</pii-input>
      <pii-input>Birthdate</pii-input>
      <pii-input>Gender</pii-input>
      <pii-input>DL #</pii-input>
      <pii-input>Race</pii-input>
      <pii-input>Address</pii-input>
      <pii-input>Phone</pii-input>
      <pii-input>Email</pii-input>
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
