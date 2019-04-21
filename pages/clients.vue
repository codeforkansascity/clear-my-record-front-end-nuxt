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
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="gridState == 'wait'">
                    <td colspan="4" style=" height: 475px;">
                        <div class="alert alert-info"
                             style="font-size: 2em;   vertical-align: middle;   text-align: center; margin-top: 160px;"
                             role="alert">Please wait.
                        </div>
                    </td>
                </tr>
                <tr v-if="gridState == 'error'">
                    <td colspan="4" style=" height: 475px;">
                        <div class="alert alert-warning"
                             style="font-size: 2em;   vertical-align: middle;   text-align: center; margin-top: 160px;"
                             role="alert">Error please try again.<br>{{ global_error_message }}
                        </div>
                    </td>
                </tr>

                <tr v-else v-for="client in clients" :key="client.id">
                    <td>{{ client.full_name }}</td>
                    <td>{{ client.dob }}</td>
                    <td>{{ client.phone }}</td>
                    <td>{{ client.address_line_1}} {{ client.address_line_2 }} {{ client.city }} {{ client.state }}</td>
                    <td>{{ client.status }}</td>
                    <td><a @click="edit(client.id)">Edit</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "client-list",
       // middleware: 'auth',
        data() {
            return {
                gridState: 'wait',
                global_error_message: null,
                key: '',
                clients: []
            }
        },
        mounted() {

        },
        async beforeCreate() {
            this.gridState = 'wait';
            await this.$axios.get(this.$store.state.apiUrlPrefix + '/clients')
                .then((res) => {
                    if (res.status === 200) {
                        this.clients = res.data;
                        this.gridState = 'good';
                    } else {
                        this.gridState = 'error';
                    }
                }).catch(error => {
                    if (error.response) {
                        this.gridState = 'error';
                        console.log(error.response);
                        this.global_error_message = error.response.data.errors;
                    }

                }).then(() => {
                    }
                );
        },
        methods: {

            async getClientList() {

            },
            goToNew() {
                this.$router.push('/add-client')
            },
            edit(client_id) {
                console.log(client_id);
               // this.$store.dispatch('clearAll');
                this.$store.dispatch('getClient', client_id);
                if ( this.$store.state.client.id ) {
                    this.$store.dispatch('getClientConvictions', client_id);
                }
                this.$router.push('/intake')
            }
        },
    }
</script>

<style scoped>

</style>
