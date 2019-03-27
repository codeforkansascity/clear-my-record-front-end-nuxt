<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">


                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email" class="form-control" name="email"
                                       value="" required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password" class="form-control"
                                       name="password" required>

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button v-on:click="login" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="/reset-password">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>

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
        data: function () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function (event) {
                // axios.post('/login', {
                //     email: this.email,
                //     password: this.password
                // })
                // .then(function (response) {
                //     console.log(response);
                //     this.$router.push('/intake')
                // })
                // .catch(function (error) {
                //     console.log(error);
                // });

                this.$router.push('/expungie-list')
            }
        }
    }

</script>

<style>


</style>
