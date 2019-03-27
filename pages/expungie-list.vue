<template>
    <div class="container">
        <h2>Expungies</h2>

        <hr/>
        <!-- Grid Actions Top -->
        <div class="grid-top row mb-0 align-items-center">
            <div class="col-lg-8 mb-2">

                <a href="#" v-on:click="goToNew" class="btn btn-primary mb-3 mb-sm-2 mr-3">Add</a>

            </div>
            <div class="col-lg-4 text-lg-right mb-2">

            </div>
        </div>
        <div class="grid no-more-tables table-responsive mb-4">
            <table class="table table-striped table-hover mb-0">
                <thead>
                <tr>
                    <th >Name</th>
                    <th >DOB</th>
                    <th >Phone</th>
                    <th >Address</th>
                    <th >Status</th>
                    <th >Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Giacomo Guilizzoni</td>
                    <td>4-Apr-1930</td>
                    <td>816-555-1212</td>
                    <td>300 Grand KCMO 64222</td>
                    <td>Records Requested</td>
                    <td><a href="#">Edit</a></td>
                </tr>
                <tr>
                    <td>Sam Spaid</td>
                    <td>15-Feb-1951</td>
                    <td>913-555-1212</td>
                    <td>300 Main KCMO 64222</td>
                    <td>Records Entered</td>
                    <td><a href="#">Edit</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "client-list",
        data() {
            return {
                key: ''
            }
        },
        methods: {
            goToNew() {
                this.$router.push('/add-expungie')
            }
        },
    }
</script>

<style scoped>

</style>
