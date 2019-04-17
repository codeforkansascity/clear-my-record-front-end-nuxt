<template>

    <div>
        <label>
            <slot></slot>
            <img src="/images/FontAwesome47 1.svg" style="display: inline-block;" v-if="this.$slots.help !== undefined"
                 v-on:click="showHelp = !showHelp"/>


            <transition name="slide-fade">
                <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                     v-if="showHelp && this.$slots.help !== undefined">
                    <slot name="help"></slot>
                </div>
            </transition>
        </label>

        <b-form-textarea
                id="textarea"
                v-model="question"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
        ></b-form-textarea>
    </div>
</template>

<script>
    export default {
        name: "pii-note-field",
        props: {
            field: {
                type: String,
                default: 'name',
            }
        },
        data: function () {
            return {
                showHelp: false,
            }
        },
        computed: {
            question: {
                get() {
                    return this.$store.state.client[this.field];
                },
                set(value) {
                    this.$store.commit('storeClientField', {field: this.field, value: value});
                },
            },
        },

    }
</script>

