<template>
    <div class="row">
        <div class="col-sm-4 ansr" style="margin-bottom: 2em">
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

        <div class="col-sm-8 ques">
            <slot></slot>
            <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                 v-if="selected == 'Help'">
                <slot name="help"></slot>
            </div>
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
                console.log(this.questionname + ': ' + val);
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 600px) {

        .ansr {
            order: 2;
            margin-left: 1.5em;
            margin-top: .5em;
        }

        .ques {
            order: 1;
        }
    }
</style>
