<template>

  <sec next="page2">
    <template slot="title">
      <h4>Introduction</h4>
    </template>
    <p>Help remove criminal convictions from your record.
      May remove barriers to jobs, housing, and benefits.</p>

    <p>If you have more than one conviction, we can refer you to ...</p>

    <prev-next next="page2"></prev-next>
  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import PrevNext from "../components/prev-next";

    export default {
        components: {Sec, PrevNext},
    }
</script>
