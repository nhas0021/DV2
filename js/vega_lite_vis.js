
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
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
    })
    .catch(console.error);


var vg_4 = "bird_sankey_external.vg.json";

vegaEmbed("#habitat_sankey", vg_4, {
    actions: false,
    loader: { baseURL: "js/" }
})
    .then(function(result) {
        // Vega view available as result.view
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
