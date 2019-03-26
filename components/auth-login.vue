<template>
    <div class="row">
        <div class="col-md-4">
            Login via
            <div class="social-buttons">
                <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
                <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
            </div>
            or
            <div>

                <div class="form-group">
                    <label class="sr-only" for="exampleInputEmail2">Email address</label>
                    <input type="email" v-model="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="exampleInputPassword2">Password</label>
                    <input type="password" v-model="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                    <div class="help-block text-right"><a href="">Forget the password ?</a></div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" v-on:click="login">Sign in</button>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> keep me logged-in
                    </label>
                </div>
            </div>
        </div>
        <div class="bottom text-center">
            New here ? <a href="#"><b>Join Us</b></a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "auth-login",
        data: function () {
            return {
                email: '',
                password: '',
                remember: '',
            }
        },
        methods: {
            login: function(event) {
                alert(this.email);
            }
        }
    }

</script>

<style>

    #login-dp{
        min-width: 250px;
        padding: 14px 14px 0;
        overflow:hidden;
        background-color:rgba(255,255,255,.8);
    }
    #login-dp .help-block{
        font-size:12px
    }
    #login-dp .bottom{
        background-color:rgba(255,255,255,.8);
        border-top:1px solid #ddd;
        clear:both;
        padding:14px;
    }
    #login-dp .social-buttons{
        margin:12px 0
    }
    #login-dp .social-buttons a{
        width: 49%;
    }
    #login-dp .form-group {
        margin-bottom: 10px;
    }
    .btn-fb{
        color: #fff;
        background-color:#3b5998;
    }
    .btn-fb:hover{
        color: #fff;
        background-color:#496ebc
    }
    .btn-tw{
        color: #fff;
        background-color:#55acee;
    }
    .btn-tw:hover{
        color: #fff;
        background-color:#59b5fa;
    }
    @media(max-width:768px){
        #login-dp{
            background-color: inherit;
            color: #fff;
        }
        #login-dp .bottom{
            background-color: inherit;
            border-top:0 none;
        }
    }

</style>
