<template>

    <div class="mb-3">
        <label>
            <slot></slot>
            <img src="/images/FontAwesome47 1.svg" style="margin-left:20px;" v-if="this.$slots.help !== undefined"
                 v-on:click="showHelp = !showHelp"/>
            <transition name="slide-fade">
                <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                     v-if="showHelp && this.$slots.help !== undefined">
                    <slot name="help"></slot>
                </div>
            </transition>
        </label>
        <div class="input-group">
            <input type="text"
                   class="form-control"
                   required="*"
                   v-model="question">
        </div>
    </div>

</template>

<script>
    export default {
        name: "input-case-field",
        props: {
            i: {
                type: String,
                value: '0',
            },
            f: {
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
                    const q = this.$store.state.cases[this.i];
                    return q ? q[this.f] : '';
                },
                set(value) {
                    this.$store.commit('storeCaseField', {index: this.i, field: this.f, value: value});
                },
            },
        },

    }
</script>

