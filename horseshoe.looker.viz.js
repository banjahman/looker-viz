/**
 * Welcome to the Looker Custom Visualization Builder! Please refer to the following resources 
 * to help you write your visualization:
 *  - API Documentation - https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md
 *  - Example Visualizations - https://github.com/looker/custom_visualizations_v2/tree/master/src/examples
 *  - How to use the CVB - https://developers.looker.com/marketplace/tutorials/about-custom-viz-builder
 **/
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const visObject = {
 /**
  * Configuration options for your visualization. In Looker, these show up in the vis editor
  * panel but here, you can just manually set your default values in the code.
  **/
  svg: document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
  options: {
    first_option: {
    	type: "string",
      label: "My First Option",
      default: "Default Value"
    },
    second_option: {
    	type: "number",
      label: "My Second Option",
      default: 42
    }
  },
 
 /**
  * The create function gets called when the visualization is mounted but before any
  * data is passed to it.
  **/
	create(element, config) {
        const backgroundColor = '#00314d';
        const fillColor = '#20c2f8';
        // Create the SVG element with namespace and attributes
        svg.setAttribute('viewBox', '0 0 200 200');
        svg.setAttribute('data-value', '40');
        svg.classList.add('horseshoe-loop');
        // Create the first path element (background)
        const backgroundPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        backgroundPath.setAttribute('class', 'bg');
        backgroundPath.setAttribute('stroke-width', '11px');
        backgroundPath.setAttribute('stroke', backgroundColor);
      //backgroundPath.setAttribute( 'stroke-miterlimit', '20' );
        backgroundPath.setAttribute('fill', 'none');
        backgroundPath.setAttribute('stroke-linecap', 'round');
        backgroundPath.setAttribute('d', 'M41 149.5a77 77 0 1 1 117.93 0');
        // Create the second path element (meter)
        const meterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        meterPath.setAttribute('class', 'meter');
        meterPath.setAttribute('stroke', fillColor);
        meterPath.setAttribute('fill', 'none');
        meterPath.setAttribute('stroke-linecap', 'round');
      //meterPath.setAttribute( 'stroke-miterlimit', '20' );
        meterPath.setAttribute( 'stroke-width', '12px' );
        meterPath.setAttribute('d', 'M41 149.5a77 77 0 1 1 117.93 0');
        meterPath.setAttribute('stroke-dasharray', '350');
        meterPath.setAttribute('stroke-dashoffset', '250');
        // Add the paths to the SVG element
        svg.appendChild(backgroundPath);
        svg.appendChild(meterPath);
        // Append the SVG to the container element
        element.appendChild(svg);
    },
    updateAsync(data, element, config, queryResponse, details, doneRendering) {
        // get the new value
        const value = 0;
        // set the new value on the svg
        svg.setAttribute('data-value', value);
        // update the UI
        doneRendering();
    }
};

looker.plugins.visualizations.add(visObject);
