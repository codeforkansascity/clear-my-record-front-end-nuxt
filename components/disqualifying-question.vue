<template>
    <div class="row">
        <div class="col-md-12">
            <slot></slot>
        </div>
        <div class="col-md-1">
        </div>
        <div class="col-md-11">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="No"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio2">No</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                       value="Unknown" v-model="selected">
                <label class="form-check-label" for="inlineRadio3">I do not know</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Help"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio4">(?)</label>
            </div>

            `{this.$slots.help}`
        </div>



        <div class="col-md-12" style="margin-left: 4em;" v-if="selected == 'Help'">
            <slot name="help"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "disqualifying-question",
        data: function () {
            return {
                selected: null
            }
        }
    }
</script>

<style scoped>

</style>
