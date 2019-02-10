<template>
    <div style="padding-top: 3em;">

        <h2>Print Form</h2>

        <p>If you are satisfied with this form and decide to file it, you will have to sign the following statement
            contained on the form:</p>

        <p>"I declare under penalty of perjury that the statements made herein are true and correct to the best of
            my knowledge, information, and belief."</p>

        <p>Only submit this form if all of the information you have provided is true and complete.</p>


        <button @click="printForm">Show PDF</button>


    </div>
</template>

<script>
    export default {
        name: "section-print",
        methods: {
            printForm: function () {
                var docDefinition = {
                    content: [
                        {
                            table: {
                                // headers are automatically repeated if the table spans over multiple pages
                                // you can declare how many rows should be treated as headers
                                headerRows: 1,
                                widths: ['auto', 'auto'],

                                body: [
                                    ['Question', 'Answer'],
                                    ['Has a criminal charge pending', this.getAns('do-you-qualify', 'criminalCharge')],
                                    ['Has had one or more convictions expunged', this.getAns('do-you-qualify', 'previously')],
                                    ['completed all requirements of sentence', this.getAns('do-you-qualify', 'obligations')],
                                    ['Felony requirements completed less than seven years ago', this.getAns('do-you-qualify', 'felonytime')],
                                    ['Misdemeanor requirements completed less than seven years ago', this.getAns('do-you-qualify', 'misdereanortime')],
                                    [' ', ' '],
                                    ['A Class A or dangerous felony?', this.getAns('are-you-excluded', 'classA')],
                                    ['A crime where a death occurred?', this.getAns('are-you-excluded', 'death')],
                                    ['Felony Assault or kidnapping?', this.getAns('are-you-excluded', 'felonyAssault')],
                                    ['Domestic Assault?', this.getAns('are-you-excluded', 'domesticAssault')],
                                    ['Operating a car, boat, or plane while intoxicated?', this.getAns('are-you-excluded', 'intoxicated')],
                                    ['A violation of a motor vehicle ordinance/law while CDL?', this.getAns('are-you-excluded', 'cdl')],

                                ]
                            },
                            layout: 'lightHorizontalLines'
                        }
                    ]


                };
                pdfMake.createPdf(docDefinition).open();
            },
            getAns: function (group, questionname) {

                var all = this.$store.getters.allQuestions;
                var index = all.findIndex(p =>
                    (p.group == group)
                    && (p.question == questionname)
                );

                if (index === -1) {
                    return '---';
                } else {
                    return all[index].answer;
                }
            }
        }
    }
</script>

