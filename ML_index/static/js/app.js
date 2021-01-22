// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the date input
var form = d3.select("#ufo-form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

tableData.forEach((ufoSighting) => {

    // //Use d3 to append one table row `tr` for each UFO Sighting object
        
        var row = tbody.append("tr");
    
    // // Step 3:  Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(ufoSighting).forEach(([key, value]) => {
    
    // // Step 4: Use d3 to append 1 cell per UFO Sighting value 
    // // (date/time, city, state, country, shape, duration, comment)
            var cell = row.append("td");
    
    // // Step 5: Use d3 to update each cell's text with UFO Sighting values
    // // (date/time, city, state, country, shape, duration, comment) 
            cell.text(value);
        });
        });
// Complete the event handler function for the input
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting=> sighting.date === inputValue);

  console.log(filteredData);
  tbody.html("")

// //Loop Through `data` and console.log each UFO Sighting object
    filteredData.forEach((ufoSighting) => {

// //Use d3 to append one table row `tr` for each UFO Sighting object
    
    var row = tbody.append("tr");

// // Step 3:  Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(([key, value]) => {

// // Step 4: Use d3 to append 1 cell per UFO Sighting value 
// // (date/time, city, state, country, shape, duration, comment)
        var cell = row.append("td");

// // Step 5: Use d3 to update each cell's text with UFO Sighting values
// // (date/time, city, state, country, shape, duration, comment) 
        cell.text(value);
    });
    });
};
