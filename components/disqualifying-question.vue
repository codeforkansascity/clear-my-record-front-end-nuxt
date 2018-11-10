<template>
    <div class="row">


        <div class="col-sm-4" style="margin-bottom: 2em">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" :name="questionname" id="inlineRadio1" value="Yes"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" :name="questionname" id="inlineRadio2" value="No"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio2">No</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" :name="questionname" id="inlineRadio3"
                       value="Unknown" v-model="selected">
                <label class="form-check-label" for="inlineRadio3">I do not know</label>
            </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" :name="questionname" id="inlineRadio4" value="Help"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio4">(?)</label>
            </div>

        </div>

        <div class="col-sm-8">
            <slot></slot>
        </div>

        <div class="col-sm-6" style="margin: 2em;" v-if="selected == 'Help'">
            <slot name="help"></slot>
        </div>





    </div>
</template>

<script>
    export default {
        name: "disqualifying-question",
        props: {
            questionname: {
                type: String,
                default: 'q1',
            }
        },
        data: function () {
            return {
                selected: null
            }
        },
        watch: {
            selected: function (val) {
                console.log(val);

                if ( val == 'No') {
  //                  this.$router.replace('cant-expunge');
                }
            }
        }
    }
</script>

<style scoped>

</style>
