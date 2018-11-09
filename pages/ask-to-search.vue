<template>

  <sec previous="in-categories" next="pii">
    <template slot="title">
      <h4>Criminal Record Search</h4>
    </template>
    <yes-no-question>Can we have your consent to run your record if nessary?</yes-no-question>
    <yes-no-question>Consent to Contact</yes-no-question>


    <p>What is the best way to contact you?</p>

    <form>
      <div class="mb-3">
        <label for="phone">Phone Number</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" id="phone" placeholder="Enter Phone Number" required="">
        </div>
      </div>
      <div class="mb-3">
        <label for="email">Email</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" id="email" placeholder="Enter Email" required="">
        </div>
      </div>
    </form>

  </sec>

</template>

<script>
    import Sec from "../components/sec";
    import YesNoQuestion from "../components/yes-no-question";

    export default {
        components: {Sec, YesNoQuestion},
    }
</script>
