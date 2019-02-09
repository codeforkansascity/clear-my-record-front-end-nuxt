<template>
    <div class="row">
        <div class="col-lg-11 ques">
            <slot></slot>
            <img src="/images/FontAwesome47 1.svg" style="margin-left:20px;" v-if="this.$slots.help !== undefined"
                 v-on:click="showHelp = !showHelp"/>
            <transition name="slide-fade">
                <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                     v-if="showHelp && this.$slots.help !== undefined">
                    <slot name="help"></slot>
                </div>
            </transition>
        </div>

        <div class="col-lg-12" style="margin-bottom: 1em">

            <div class="radio-toolbar">
                <input type="radio" :name="questionname" :id="questionname+'1'" value="Yes"
                       v-model="selected">
                <label class="form-check-label" :for="questionname+'1'">Yes</label>


                <input type="radio" :name="questionname" :id="questionname+'2'" value="No"
                       v-model="selected">
                <label class="form-check-label" :for="questionname+'2'">No</label>


                <input type="radio" :name="questionname" :id="questionname+'3'"
                       value="Unknown" v-model="selected">
                <label class="form-check-label" :for="questionname+'3'">Not Sure</label>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "disqualifying-question",
        props: {
            group: {
                type: String,
                default: 'group',
            },
            questionname: {
                type: String,
                default: 'q1',
            }

        },
        data: function () {
            return {
                showHelp: false,
            }
        },
        computed: {
            selected: {
                get() {
                    const q = this.$store.state.questions.find(item => (item.group == this.group && item.question === this.questionname));
                    return q ? q.answer : '';
                },
                set(value) {
                    this.$store.dispatch('storeQuestion', {
                        group: this.group,
                        question: this.questionname,
                        answer: value
                    });
                },
            },
        },

    }
</script>


