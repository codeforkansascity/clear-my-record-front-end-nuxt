<template>

    <div>
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

        <input type="text"
               class="form-control"
               required="*"
               v-model="question">
    </div>
</template>

<script>
    export default {
        name: "input-conviction-field",
        props: {
            i: {
                type: [Number, String],
                value: 0,
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
                    const q = this.$store.state.convictions[this.i];
                    return q ? q[this.f] : '';
                },
                set(value) {
                    this.$store.commit('storeConvictionField', {
                        index: this.i,
                        field: this.f,
                        value: value});
                },
            },
        },

    }
</script>

