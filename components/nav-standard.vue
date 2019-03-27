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

            </ul>
            <ul class="navbar-nav my-2 my-md-01">
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "nav-standard"
    }
</script>

<style scoped>

</style>
