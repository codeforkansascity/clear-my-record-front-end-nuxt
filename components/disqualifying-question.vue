<template>
    <div class="row">
        <div class="col-sm-8 ques">
            <slot></slot>
            <transition name="slide-fade">
                <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                     v-if="showHelp && this.$slots.help !== undefined">

                    <slot name="help"></slot>

                </div>
            </transition>
        </div>
        <div class="col-sm-4 " style="margin-bottom: 2em">

            <div class="radio-toolbar">
                <input  type="radio" :name="questionname" id="inlineRadio1" value="Yes"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio1">Yes</label>



                <input  type="radio" :name="questionname" id="inlineRadio2" value="No"
                       v-model="selected">
                <label class="form-check-label" for="inlineRadio2">No</label>



                <input  type="radio" :name="questionname" id="inlineRadio3"
                       value="Unknown" v-model="selected">
                <label class="form-check-label" for="inlineRadio3">I do not know</label>
            </div>

            <div class="form-check form-check-inline" v-if="this.$slots.help !== undefined">
                <span v-on:click="showHelp = !showHelp" class="form-check-label" for="inlineRadio4">(?)</span>
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
                selected: [],
                showHelp: false,
            }
        },
        mounted: function () {

            var all = this.$store.getters.allQuestions;

            var index = all.findIndex(p => p.group == this.group && p.question == this.questionname);

            if (index === -1 ) {
                this.selected = null;
            } else {
                this.selected = all[index].answer;
            }

        },
        watch: {
            selected: function (val) {
                console.log('group=' + this.group);
                console.log(this.questionname + ': ' + val);

                console.log('==============================');
                this.$store.dispatch('storeQuestion', { group: this.group, question: this.questionname, answer: val });
                let x = JSON.stringify(this.$store.getters.allQuestions);
                console.dir(x);
                console.log('==============================');
            }
        }
    }
</script>

<style scoped>
/*
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
    */

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(20px);
        opacity: 0;
    }

/* https://markheath.net/post/customize-radio-button-css */

.radio-toolbar {
    margin: 10px;
}

.radio-toolbar input[type="radio"] {
    display:none;
}

.radio-toolbar label {
    display:inline-block;
    background-color:#ddd;
    padding: 10px 20px;
    font-family:Arial;
    font-size:16px;
    border: 2px solid #444;
    border-radius: 4px;
}

.radio-toolbar label:hover {
    background-color: #dfd;
}

.radio-toolbar input[type="radio"]:checked + label {
    background-color:#bfb;
    border-color: #4c4;
}
</style>
