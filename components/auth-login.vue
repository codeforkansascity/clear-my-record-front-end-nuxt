<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">

                        <form @submit.prevent="login">


                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            required
                                            autofocus
                                            v-model="email"
                                    >

                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="password"
                                    >

                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    <a class="btn btn-link" href="/reset-password">
                                        Forgot Your Password?
                                    </a>
                                </div>
                                <div class="col-md-8 col-md-offset-4">
                                    <p>
                                        Don't have an account?
                                        <nuxt-link to="/register">Register</nuxt-link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "auth-login",


        data() {
            return {
                email: '',
                password: '',
                error: null
            }
        },

        methods: {
            async login() {
                try {
                    await this.$auth.loginWith('local', {  // NUXT AUTH
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    })
                    console.log('done await');
                    this.$router.push('/')
                } catch (e) {
                    this.error = e.response.data.message;
                    console.log(e.response.data.message);
                }
                console.log('done try');
            }

        }
    }

</script>

<style>


</style>
