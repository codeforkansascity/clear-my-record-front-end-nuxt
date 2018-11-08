<template>
        <div class="row mb-4">
            <div class="col-6">
                <nuxt-link v-if="this.previous" class="btn btn-secondary btn-sm"
                        :to="this.previous">Privious page</nuxt-link>
            </div>
            <div class="col-6 ">
                <nuxt-link v-if="this.next"
                   class="btn btn-primary btn-sm float-right "
                :to="this.next">Next Page</nuxt-link>
            </div>

        </div>
</template>

<script>
    export default {
        name: "prev-next",
        props: {
            previous: {
                type: String,
                default: '',
            },
            next: {
                type: String,
                default: '',
            },
        }
    }
</script>

