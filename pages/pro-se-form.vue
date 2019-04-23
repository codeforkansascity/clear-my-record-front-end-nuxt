<template>
    <div class="container">


        <h1>Missouri Pro Se Expungement Application Form</h1>
        <h2>Clear My Record Code for KC/UMKC School of Law</h2>

        <h3>Description</h3>
        <p>Below is a draft petition for expungement for the state of Missouri. The document is based upon a form
            provided by the OSCA.</p>

        <h3>Information Needed (source)</h3>

        <table>


            <tr>
                <td>Judicial Circuit Number:</td>
                <td> <get_pii_value field="judicial_ciruit_number" missing_prompt="Judicial Circuit Number"></get_pii_value></td>

            </tr>
            <tr>
                <td>County Name:</td>
                <td> <get_pii_value field="county_name" missing_prompt="County Name"></get_pii_value></td>
            </tr>
            <tr>
                <td>Judge Name:</td>
                <td> <get_pii_value field="judge_name" missing_prompt="Judge Name/Address"></get_pii_value></td>
            </tr>
            <tr>
                <td>Division Name:</td>
                <td> <get_pii_value field="division_name" missing_prompt="Division Name/Address"></get_pii_value>  </td>
            </tr>
            <tr>
                <td>Petitioner Name</td>
                <td> <get_pii_value field="full_name" missing_prompt="What is your full name?"></get_pii_value></td>
            </tr>
            <tr>
                <td>Division Number</td>
                <td>  <get_pii_value field="division_number" missing_prompt="Division Number/Address"></get_pii_value></td>
            </tr>
            <tr>
                <td>Municipal Court Name</td>
                <td> <get_pii_value field="city_name_here" missing_prompt="Municipal Court Name/Address"></get_pii_value> </td>
            </tr>
            <tr>
                <td>County of Prosecutor(s)</td>
                <td>  <get_pii_value field="county_name" missing_prompt="County of Prosecutor(s)/Address"></get_pii_value> </td>
            </tr>
            <tr>
                <td>Arresting County Name</td>
                <td>   <get_pii_value field="arresting_county" missing_prompt="Arresting County Name/Address"></get_pii_value> </td>
            </tr>
            <tr>
                <td>Prosecuting County</td>
                <td>  <get_pii_value field="prosecuting_county" missing_prompt="County of Prosecutor(s)/Address"></get_pii_value> </td>
            </tr>
            <tr>
                <td>Arresting Municipality</td>
                <td>  <get_pii_value field="arresting_municipality" missing_prompt="Arresting Municipality/Address"></get_pii_value> </td>
            </tr>
            <tr>
                <td>Other Agencies Names and</td>
                <td>  <get_pii_value field="other_agencies_name" missing_prompt="Other Agencies Names and Addreses"></get_pii_value> </td>
            </tr>
            <tr>
                <td>Previous Expungement Information</td>
                <td></td>
            </tr>

            <tr>
                <td>Full Name:</td>
                <td> FirstName MiddleName LastName NameSuffix</td>
            </tr>
            <tr>
                <td>Current Street Address City, State, Zip:</td>
                <td> <get_pii_address_value field="address_line_1" missing_prompt="Address Line 1"></get_pii_address_value> </td>
            </tr>
            <tr>
                <td>Drivers License Number:</td>
                <td> <get_pii_value field="license_number" missing_prompt="License number"></get_pii_value> </td>
            </tr>
            <tr>
                <td>Drivers License Expiration Date:</td>
                <td>  <get_pii_value field="license_expiration_date" missing_prompt="Expiration date"></get_pii_value> </td>
            </tr>
            <tr>
                <td>NEED TO FINISH UP LIST PULLING FIELDS FROM DOCUMENT…</td>
            </tr>
            <tr>
                <td>Form Drafting Notes:</td>
                <td> In Bold Italic</td>
            </tr>

        </table>

        DriversLicenseStateName = <get_pii_value field="license_issuing_state" missing_prompt="Issuing state"></get_pii_value>


        <p>[NOTE: These are explanatory notes for use during the form creation process. These notes will be deleted
            after the form creation process is complete. Ellen, Chris, Scott P. - please comment as needed to clarify
            and please leave your initials so we know who is saying what. scs ]</P>


        <h1>IN THE <get_pii_value field="judicial_ciruit_number"></get_pii_value> JUDICIAL CIRCUIT, <get_pii_value field="county_name"></get_pii_value> COUNTY, MISSOURI</h1>


        <p><get_pii_value field="full_name" missing_prompt="What is your full name?"></get_pii_value>,<br>
            Petitioner</p>

        vs.

        <p>Case No. __________________</p>


        <p>Circuit Court Division <get_pii_value field="division_number" missing_prompt="Division Number/Address"></get_pii_value></p>
        <p>Municipal Division, City of <get_pii_value field="city_name_here" missing_prompt="Municipal Court Name/Address"></get_pii_value>,</p>
        <p>Missouri Highway Patrol (MSHP) Criminal Justice Information Services (CJIS) Division,</p>
        <p>Prosecuting Attorney(s)/Circuit Attorney(s)  <get_pii_value field="prosecuting_county" missing_prompt="County of Prosecutor(s)/Address"></get_pii_value>  County,</p>
        <p>Missouri Department of Revenue,</p>
        <p> <get_pii_value field="arresting_county" missing_prompt="Arresting County Name/Address"></get_pii_value>  County Sheriff’s Department,</p>
        <p> <get_pii_value field="prosecuting_county" missing_prompt="County of Prosecutor(s)/Address"></get_pii_value>  County Sheriff’s Department,</p>
        <p> <get_pii_value field="arresting_municipality" missing_prompt="Arresting Municipality/Address"></get_pii_value>  Municipal Police Department,</p>
        <p> <get_pii_value field="other_agencies_name" missing_prompt="Other Agencies Names and Addreses"></get_pii_value>,</p>
        <p>Respondents.</p>


        <p><b>Petition for Expungement</b></p>
        <p>Section 610.140, RSMo.</p>

        <p>Pursuant to section 610.140, RSMo., I request that the court issue an order to expunge my record of arrest,
            plea, trial, or conviction(s), for the criminal case(s) below.</p>

        <p>All of the convictions listed below occurred and were prosecuted within the state of Missouri. I am filing
            this petition in the county where the conviction was charged or I was found guilty.</p>

        <p>I have reason to believe the agencies named above may possess records subject to expungement. The court’s
            order of expungement shall not affect any person or entity not named as a defendant in the action. I
            understand that if I do not meet all of the criteria for any of the offenses listed for expungement or
            knowingly provide false information, the petition will be dismissed by the court and I may not refile
            another petition until a year has passed since the date of filing of this petition.</p>

        <p>I hereby swear:</p>

        <p>That the appropriate amount of time has elapsed since the arrest and/or completion of the authorized
            disposition imposed for each offense that I am asking to have expunged; it has been at least seven years for
            any felony offense or at least three years for any misdemeanor, infraction, or ordinance violation;</p>
        <p>I have not been found guilty of any other misdemeanor or felony, not including violations of the traffic
            regulations provided under chapters 304 and 307, RSMo., during the time period specified for the underlying
            offense, violation, or infraction in section 610.140.5.1, RSMo.;</p>
        <p>I have satisfied all obligations relating to such disposition, including the payment of any fines or
            restitution;</p>
        <p>I do not have any charges pending;</p>
        <p>My habits and conduct demonstrate that I am not a threat to the public safety of the state;</p>
        <p>I have not been previously granted an expungement in the state of Missouri except as follows: [NOTE: Answer
            “None.” or state court and case number]; and</p>
        <p>The expungement is consistent with the public welfare and the interests of justice warrant the
            expungement.</p>
        <p>My full name is FirstName MiddleName LastName NameSuffix.</p>
        <p>My gender is <get_pii_value field="sex" missing_prompt="sss"></get_pii_value>.</p>
        <p>My race is <get_pii_value field="race" missing_prompt="sss"></get_pii_value>.</p>
        <p>My date of birth is <get_pii_value field="dob" missing_prompt="sss"></get_pii_value>.</p>
        <p>My current address is  <get_pii_address_value field="address_line_1" missing_prompt="Address Line 1"></get_pii_address_value>.</p>
        <p>My driver’s license is issued by the state of <get_pii_value field="license_issuing_state" missing_prompt="Issuing state"></get_pii_value>, license number  <get_pii_value field="license_number" missing_prompt="License number"></get_pii_value>,
            expiration date  <get_pii_value field="license_expiration_date" missing_prompt="Expiration date"></get_pii_value> .</p>
        <p>The case(s) for which I am seeking expungement include the following:</p>

        <table>
            <tr>
                <th>Case Number</th>
                <th>Court Name</th>
                <th>Approximate Date of Charge</th>
                <th>County/Municipality of Charge</th>
                <th>Description of Charge</th>
            </tr>
            <tr>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
            </tr>
            <tr>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
            </tr>
            <tr>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
            </tr>
        </table>


        <p>I declare under penalty of perjury that the statements made herein are true and correct to the best of my
            knowledge, information, and belief.</p>


        <p>
            _____________________________<br>
            <get_pii_value field="full_name" missing_prompt="What is your full name?"></get_pii_value><br>
            <get_pii_address_value field="address_line_1" missing_prompt="Address Line 1"></get_pii_address_value><br>
            Phone number: PhoneNumber<br>
            Email Address: EmailAddress<br>
            Pro Se Applicant<br>
        </p>

        <p>Based upon OSCA (11-17) CR360 Document/UMKC/C4KC</p>

    </div>

</template>

<script>
    import Get_pii_value from "../components/get_pii_value";
    import Get_pii_address_value from "../components/get_pii_address_value";
    export default {
        name: "pro-se-form",
        components: {Get_pii_address_value, Get_pii_value}
    }
</script>

<style scoped>

</style>
