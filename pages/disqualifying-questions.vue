<template>

  <sec previous="onecase" next="privacy">
    <template slot="title">
      <h4>Disqualifying Questions</h4>
    </template>
    <yes-no-question>Do you have any prending cases?</yes-no-question>
    <yes-no-question>Do you have any previous expungements?</yes-no-question>
    <yes-no-question>Completion of most recent felony sentence less than 7 years?</yes-no-question>
    <yes-no-question>Completion of most recent misdemeanor sentence less than 3 years?</yes-no-question>

    <p><i>For now we will continue as if they qualified</i></p>

  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import YesNoQuestion from "../components/yes-no-question";

    export default {
        components: {Sec, YesNoQuestion},
    }
</script>
