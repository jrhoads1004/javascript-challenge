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
    
  var inputState = d3.select("#state");
  var stateinputValue = inputState.property("value");
    
  var inputShape = d3.select("#shape");
  var shapeinputValue = inputShape.property("value");

  console.log(inputValue);
  console.log(stateinputValue);
  console.log(shapeinputValue);
  console.log(tableData);
      
  var filteredData = tableData.filter(date => date.datetime === inputValue).filter(state => state.state === stateinputValue).filter(shape => shape.shape === shapeinputValue);

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
