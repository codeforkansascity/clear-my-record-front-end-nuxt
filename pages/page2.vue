<template>

  <sec previous="/" next="page3">
    <template slot="title">
      <h4>Missouri</h4>
    </template>
    Missouri has recently changed their law making it easier to expunge more convictions.
    <ul>
      <li>Time limit</li>
      <li>Pending cases</li>
    </ul>

  </sec>

</template>

<script>
    import Sec from "../components/sec";

    export default {
        components: {Sec},
    }
</script>
