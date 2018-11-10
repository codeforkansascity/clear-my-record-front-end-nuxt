<template>
    <div>
        <sec>
            <template slot="title">
                <h4>Cant Expunge</h4>
            </template>
            <p>Sorry...</p>

                <p class="text-center">
                    <nuxt-link
                            class="btn btn-primary btn-sm btn-outline-success"
                            to="/">Home Page
                    </nuxt-link>
                </p>

            <p class="text-center">
                <nuxt-link
                        class="btn btn-primary btn-sm btn-outline-success"
                        to="/page2">Back
                </nuxt-link>
            </p>



        </sec>

    </div>
</template>

<script>
    import Sec from "../components/sec";

    export default {
        components: {Sec},
    }
</script>
