// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");


tableData.forEach((UFO_sighting) => {
  var row = tbody.append("tr");
  Object.entries(UFO_sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");

button.on("click", function() {    
    
  var inputDate = d3.select("#datetime");
  var inputValue = inputDate.property("value");

  console.log(inputValue);
  console.log(tableData);
  
  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);
    
  tbody.html("");
  
  filteredData.forEach((UFO_sighting) => {
  var row = tbody.append("tr");
  Object.entries(UFO_sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });
  });

reset_button.on("click", function() {    
    
    console.log("Resetting Table");
    
    tbody.html("");
  
    tableData.forEach((UFO_sighting) => {
        var row = tbody.append("tr");
        Object.entries(UFO_sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    });
