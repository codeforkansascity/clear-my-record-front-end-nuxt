<template>
    <div>
        <sec>
            <template slot="title">
                <h4>Missouri
                    Record
                    Expungement</h4>
            </template>
            <p>Is a crime on your record preventing you from getting a job, housing, or other things you need?</p>

            <p>The State of Missouri allows some criminal offenses to be expunged from your criminal record. This means
                that the record is closed and you are able to honestly say “no” to whether you have the conviction
                almost all the time. The state even provides a self-help form for you to fill out and file.
            </p>

            <p class="text-center">
                <nuxt-link
                        class="btn btn-primary btn-sm btn-outline-success"
                        to="/page2">Find out if you qualify.
                </nuxt-link>
            </p>

            <p><b>What is expungement?</b> Expungement is an order by the court that sentenced you that expunges
                (prevents the disclosure of) the arrest, conviction, sentence and any other information about that crime
                in most circumstances.</p>
            <p>If you only have one conviction, and that conviction is expunged, you can honestly answer that you do not
                have a record on most applications for jobs, housing, and other benefits.</p>
            <p>To get an expungement, you must file a request with the court (petition). The court will notify everyone
                who has information about your crime (for example, the prosecutor, police, sheriff, and Missouri Highway
                Patrol) that you want an expungement, and will hold a hearing if there is an objection. You and these
                agencies may participate in the hearing. If there is no objection, the court may hold a hearing or may
                issue an expungement order without one.</p>
            <p>The law presumes that you are entitled to expungement if you meet the qualifications.</p>


        </sec>

    </div>
</template>

<script>
    import Sec from "../components/sec";

    export default {
        components: {Sec},
        mounted: function () {
            this.$store.dispatch('clearAll');
        }
    }
</script>
