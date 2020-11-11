// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!


// select table
var tbody = d3.select("tbody");


//append all data to table
tableData.forEach(function(UFOsighting) {
	console.log(UFOsighting);
	var row = tbody.append("tr");
		Object.entries(UFOsighting).forEach(function([key,value]){
			//console.log(`${key} : ${value}`);		
			row.append("td").text(value);
			});
	});

//filter by date search

//declare button and input
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");

//function that will filter the data based on input
function filterclick(){
	//prevent page refresh
	d3.event.preventDefault();
	console.log("button was clicked");
	//input value
	var inputValue = input.property("value");
	console.log(`input : ${inputValue}`);
	console.log(d3.event.target);
	//clear field
	tbody.html("");
	//filter from input
	var filterDate = tableData.filter(tableData => tableData.datetime === inputValue);
	
	
	
	//create new table with values from only filter date
	//append filtered row and values
	//same as previous code
	
		//create msg if filter 	
		if (filterDate.length == 0){
			var thead = d3.select("thead");
			var row = tbody.append("tr");
			row.append("td").text("No sightings on this date");
			
			
   
			}
		else {
			filterDate.forEach(function(UFOsighting) {
				console.log(UFOsighting);
				var row = tbody.append("tr");
					Object.entries(UFOsighting).forEach(function([key,value]){
						//console.log(`${key} : ${value}`);		
						row.append("td").text(value);
						});
		});}
}

//click button and run function
button.on("click", filterclick);
