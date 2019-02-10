<template>
        <two-panels style="padding-top: 30px;">
            <template slot="left">
                <h3 style="padding-bottom: 30px; font-weight: bold;">Is a crime on your record preventing you from getting a job, housing, or other things you need?</h3>
                <p>The State of Missouri allows some criminal offenses to be expunged from your criminal record. This means that the record is closed and you are able to honestly say “no” to whether you have the conviction almost all the time. The state even provides a self-help form for you to fill out and file.</p>
                <a class="btn btn-secondary btn-sm"
                   href="/do-you-qualify">Find out if you qualify
                </a>
            </template>
            <template slot="right">
                <h5>THIS IS HOW IT WORKS</h5>
                <ol class="works-list">
                    <li>See if you qualify for expungement</li>
                    <li>Give us some information about you and your conviction</li>
                    <li>We'll generate a completed application </li>
                    <li>Print and submit the application</li>
                </ol>
            </template>
        </two-panels>
</template>

<script>
    import TwoPanels from "../components/two-panels";



    export default {
        components: {TwoPanels}
    }
</script>

<style>

    /* From https://stackoverflow.com/questions/17629286/css-vertical-line-between-bullets-in-an-unordered-list */

    ol.works-list li {
        position:relative; /* so that pseudoelements are positioned relatively to their "li"s*/
        /* use padding-bottom instead of margin-bottom.*/
        margin-bottom: 0; /* This overrides previously specified margin-bottom */
        padding-bottom: 2.5em;
    }

    ol.works-list li:after {
        /* bullets */
        content: url('http://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RedDisc.svg/20px-RedDisc.svg.png');
        position: absolute;
        left: -26px; /*adjust manually*/
        top: 0px;
    }

    ol.works-list li:before {
        /* lines */
        content:"";
        position: absolute;
        left: -16px; /* adjust manually */
        border-left: 1px solid black;
        height: 100%;
        width: 1px;
    }

    ol.works-list li:first-child:before {
        /* first li's line */
        top: 6px; /* moves the line down so that it disappears under the bullet. Adjust manually */
    }

    ol.works-list li:last-child:before {
        /* last li's line */
        height: 6px; /* shorten the line so it goes only up to the bullet. Is equal to first-child:before's top */
    }

</style>
