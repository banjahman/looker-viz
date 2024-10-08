looker.plugins.visualizations.add({
	create(element, config) {
        element.innerHTML = "test";
    },
    updateAsync(data, element, config, queryResponse, details, doneRendering) {
        doneRendering();
    }
});
