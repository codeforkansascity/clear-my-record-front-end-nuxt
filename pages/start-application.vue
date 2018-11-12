<template>

    <sec previous="page3" next="terms-of-use">
        <template slot="title">
            <h4>Complete an Application?</h4>
        </template>
        <p>If you think you are eligible and the offense you have may
            be expunged, you may use this service to complete an application. </p>

        <p>NEED TO MAKE IT CLEAR THAT THIS SERVICE IS ONLY FOR ONE CONVICTION. IF YOU HAVE MULTIPLE CONVICTION, THIS
            SERVICE WILL NOT WORK. YOU SHOULD SEEK ASSISTANCE FROM AN ATTORNEY TO MAKE SUCH AN APPLICATION.</p>

        <template slot="note">
            <p><i>
                Button: Begin
                Button: Save My Information for Later
                Button: Close App </i></p>
        </template>
    </sec>

</template>

<script>
    import Sec from "../components/sec";
    import DisqualifyingQuestion from "../components/disqualifying-question";

    export default {
        components: {Sec, DisqualifyingQuestion},
    }
</script>
