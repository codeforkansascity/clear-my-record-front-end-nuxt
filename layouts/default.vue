<template>
  <div>
    <nav-standard></nav-standard>
    <nuxt/>
  </div>
</template>

<script>
    import NavStandard from "../components/nav-standard";
    export default {
        components: {NavStandard}
    }
</script>

<style>
html {

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Space out content a bit */
body {
  /*padding-top: 1.5rem;*/
  padding-bottom: 1.5rem;
}





/* Responsive: Portrait tablets and up */
@media screen and (min-width: 48em) {
  /* Remove the padding we set earlier */
  .header,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }
  /* Space out the masthead */
  .header {
    margin-bottom: 2rem;
  }
}
</style>
