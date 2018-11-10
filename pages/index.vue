<template>
    <div>
        <sec>
            <template slot="title">
                <h4>Missouri
                    Record
                    Expungement</h4>
            </template>
            <p>The State of Missouri allows some criminal offenses to be removed, or expunged, from your criminal record.
                The state even provides a self-help form for you to fill out and file.</p>

                <p class="text-center">
                    <nuxt-link
                            class="btn btn-primary btn-sm btn-outline-success"
                            to="/page2">Find out if you qualify.
                    </nuxt-link>
                </p>

            <p><b>What is expungement?</b> Expungement is an order by the court that sentenced you that removes, or expunges, the criminal arrest, conviction, and history from your record.
                You must file a request with the court (petition) asking the court for an expungement.
                The court must set a hearing within 30 days of your petition and must issue a ruling within 60 days.
                The prosecutor, police, sheriff, and Missouri Highway Patrol will receive notice of the case and may participate in the hearing.
                The law presumes that you are entitled to expungement if you meet the qualifications.</p>

        </sec>

    </div>
</template>

<script>
    import Sec from "../components/sec";

    export default {
        components: {Sec},
    }
</script>
