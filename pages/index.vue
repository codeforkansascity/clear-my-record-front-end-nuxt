<template>
    <div>
        <sec>
            <template slot="title">
                <h4>Introduction</h4>
            </template>
            <p>We may beable to help you remove criminal convictions from your record by
                removeing barriers to jobs, housing, and benefits.
                If not we will refere you to someone that can help you.</p>

            <p>In Missouri you may have one old felony and two old misdemeanors removed from your record.
                Not all crimes can be expunged in Missouri.
                You can do this with a court proceeding called expungement.</p>



                <p class="text-center">
                    <nuxt-link
                            class="btn btn-primary btn-sm"
                            to="/page2">Next Page
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
