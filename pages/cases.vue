<template>
    <div class="container">

                <h4>Work Sheet of Cases</h4>


            <cases v-for="ccase in this.$store.getters.allCases" :key="ccase.id"  :ccase="ccase">

            </cases>



    </div>
</template>

<script>
    import Sec from "../components/sec";
    import Cases from "../components/cases";

    export default {
        components: {Sec, Cases},
        mounted: function () {


        },
        methods: {
            getAns: function(group, questionname) {

                var all = this.$store.getters.allQuestions;
                var index = all.findIndex(p =>
                    (p.group == group)
                    && (p.question == questionname)
                );

                if (index === -1 ) {
                    return '---';
                } else {
                    return all[index].answer;
                }
            }
        }
    }
</script>
