<template>
    <div class="container">
        <div class="row mt-4 mb-4">
            <div class="col-md-3 col-lg-3">
                <h4>Introduction</h4>
            </div>
            <div class="col-md-9 col-lg-9">
                <slot name="intro"></slot>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-3 col-lg-3">
                <h4>Question</h4>
            </div>
            <div class="col-md-9 col-lg-9">
                <slot name="question"></slot>
            </div>
        </div>
        <div class="row mb-4 d-flex justify-content-center">
            <div class="">
                <button v-on:click="question_answered = !question_answered" type="button" class="btn btn-primary btn-sm">
                    <slot name="answer"></slot>
                </button>
             </div>
        </div>
        <div class="row mb-4">
            <div class="col-6">
                <a v-if="this.previous" class="btn btn-secondary btn-sm"
                        :href="this.previous">Privious page</a>
            </div>
            <div class="col-6 ">
                <a v-if="this.next" :class="{disabled: !question_answered}"
                   class="btn btn-primary btn-sm float-right "
                :href="this.next">Next Page</a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "question",
        props: {
            previous: {
                type: String,
                default: '',
            },
            next: {
                type: String,
                default: '',
            },

        },
        data: function() {
            return {
                question_answered: false
            }
        }
    }
</script>

<style scoped>

</style>
