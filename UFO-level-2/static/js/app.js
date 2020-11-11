// from data.js
var tableData = data;

// YOUR CODE HERE!

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
//inputs
var input1 = d3.select("#datetime");
var input2 = d3.select("#city");
var input3 = d3.select("#state");
var input4 = d3.select("#country");
var input5 = d3.select("#shape");


//function that will filter the data based on input
function filterclick(){
	//prevent page refresh
	
	console.log("button was clicked");
	//input values
	var inputValue1 = input1.property("value");
	var inputValue2 = input2.property("value").toLowerCase();
	var inputValue3 = input3.property("value").toLowerCase();
	var inputValue4 = input4.property("value").toLowerCase();
	var inputValue5 = input5.property("value").toLowerCase();
	
	
	
	
	

	console.log(d3.event.target);
	//clear field
	tbody.html("");
	//filter from input
	var filterData = [];
	
	if (inputValue1){
		var filterData = tableData.filter(tableData => tableData.datetime === inputValue1);
	}
	if (inputValue2){
		if (filterData.length == 0){
		var filterData = tableData.filter(tableData => tableData.city === inputValue2);
		}
		else{var filterData = filterData.filter(tableData => tableData.city === inputValue2);
		}
	}
	if (inputValue3){
		if (filterData.length == 0){
		var filterData = tableData.filter(tableData => tableData.state === inputValue3);
		}
		else{var filterData = filterData.filter(tableData => tableData.state === inputValue3);
		}
	}
	if (inputValue4){
		if (filterData.length == 0){
		var filterData = tableData.filter(tableData => tableData.country === inputValue4);
		}
		else{var filterData = filterData.filter(tableData => tableData.country === inputValue4);
		}	
	}
	if (inputValue5){
		if (filterData.length == 0){
		var filterData = tableData.filter(tableData => tableData.shape === inputValue5);
		}
		else{var filterData = filterData.filter(tableData => tableData.shape === inputValue5);
		}
	}
	
	
	
	
	//append filtered row and values
	
	
	//create new table with values from only filter date
	//same as previous code
	
		if (filterData.length == 0){
			var thead = d3.select("thead");
			
			var row = tbody.append("tr");
			row.append("td").text("");
			row.append("td").text("");
			row.append("td").text("");
			row.append("td").text("");
			row.append("td").text("No sightings for the given search");
			row.append("td").text("");
			row.append("td").text("");
			
			
   
			}
		else {
			filterData.forEach(function(UFOsighting) {
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
