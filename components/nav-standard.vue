<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src="/images/mo.svg">CLEAR MY RECORD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/do-you-qualify">Check Qualifications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/faq">FAQs</a>
                </li>
                <li class="nav-item" v-if="this.$auth.loggedIn">
                    <a class="nav-link" href="/intake">Intake Form</a>
                </li>

            </ul>
            <ul class="navbar-nav my-2 my-md-01">
                <li class="nav-item" v-if="!this.$auth.loggedIn">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="" v-if="this.$auth.loggedIn">
                    <b-nav-item-dropdown
                            id="my-nav-dropdown"
                            v-bind:text="this.$auth.user.username"
                            extra-toggle-classes="nav-link-custom"
                            left
                    >
                        <b-dropdown-item v-on:click="profile">Profile</b-dropdown-item>
                        <b-dropdown-item v-on:click="change_password">Change Password</b-dropdown-item>
                        <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
    const Cookie = process.client ? require('js-cookie') : undefined


    export default {
        name: "nav-standard",
        methods: {
            profile() {
                this.$router.push('/profile')
            },
            change_password() {
                this.$router.push('/change-password')
            },
            async logout() {
                console.log('start logout');
                await this.$auth.logout();

                // // One of the following should work but does not
                // Cookie.remove('auth')
                // Cookie.remove('auth._token')
                // Cookie.remove('auth._token.local')
                // Cookie.remove('auth._refresh_token.local')
                //
                // // document.cookie = 'auth' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=localhost;';
                //
                // localStorage.removeItem('auth._token.local');
                // this.$store.dispatch('logout');
                // console.log('end logout');
                // //
                // //
                // this.$store.commit('setAuth', null)
                this.$router.push('/profile');
                console.log('end logout');

            }
        },
    }
</script>

<style scoped>

</style>
