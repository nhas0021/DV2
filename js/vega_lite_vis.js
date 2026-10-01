var vg_1 = "js/species_by_state_lollipop.vg.json";

vegaEmbed("#species-lollipop", vg_1)
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);