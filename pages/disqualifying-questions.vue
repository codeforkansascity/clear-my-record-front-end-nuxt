<template>

  <sec previous="onecase" next="privacy">
    <template slot="title">
      <h4>Disqualifying Questions</h4>
    </template>



  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import YesNoQuestion from "../components/yes-no-question";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, YesNoQuestion, DisqualifyingQuestion},
    }
</script>
