<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Reset Password</div>

                    <div class="panel-body">

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                            <div class="col-md-6">
                                <input v-model="email" id="email" type="email" class="form-control" name="email"
                                       required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>
                            <div class="col-md-6">
                                <input v-model="password" id="password" type="password" class="form-control"
                                       name="password" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>
                            <div class="col-md-6">
                                <input v-model="password_confirm" id="password-confirm" type="password"
                                       class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button v-on:click="reset_password" class="btn btn-primary">
                                    Reset Password
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reset-password",
        data() {
            return {
                email: '',
                password: '',
                password_confirm: ''
            }
        },
        methods: {
            reset_password() {
                alert('reset password');
               this.$router.push('/login')
            }
        },
    }
</script>

<style scoped>

</style>
