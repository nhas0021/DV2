
var vg_1 = "species_by_state_lollipop.vg.json";

vegaEmbed("#species_lollipop", vg_1, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);


var vg_2 = "choropleth_map.vg.json";

vegaEmbed("#threatened_choropleth", vg_2, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);



var vg_3 = "bird_family_heatmap.vl.json";

vegaEmbed("#family_heatmap", vg_3, {
    actions: false,
    renderer: "svg",
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);



var vg_4 = "bird_sankey_external.vg.json?v=3";

vegaEmbed("#habitat_sankey", vg_4, {
    actions: false,
    tooltip: { theme: "light" },
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        console.log("Sankey loaded successfully");
    })
    .catch(console.error);

var vg_5 = "migratory_symbol_map.vl.json";

vegaEmbed("#migratory_symbols", vg_5, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);


var vg_6 = "iconic_birds_hexbin_with_zeros.vl.json";

vegaEmbed("#victoria_hexbin", vg_6, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);


var vg_7 = "waffle_threatened_species_latest.vg.json";

vegaEmbed("#threatened_waffle", vg_7, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);


var vg_8 = "nesting_habits_dropdown.vg.json";

vegaEmbed("#nesting_habits", vg_8, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);

var vg_9 = "threatened_families_butterfly.vg.json";

vegaEmbed("#threatened_families", vg_9, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);

var vg_10 = "bird_length_histogram.vl.json";

vegaEmbed("#bird_length_histogram", vg_10, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);

var vg_11 = "bird_family_body_mass.vl.json";

vegaEmbed("#bird_family_mass", vg_11, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);
