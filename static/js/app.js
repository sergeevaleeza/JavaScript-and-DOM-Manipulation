// from data.js
var tableData = data;

// Assign the data from `data.js` to a descriptive variable
var dateData = data;

// Select the filter button
var filter = d3.select("#filter-btn"); 
var clear = d3.select("#clear-btn");


clear.on("click", "#clear-btn", function() {
    // Prevent the page from refreshing
     d3.event.preventDefault();

    // Clear content of the table
    var tbody = d3.select("tbody");
    document.getElementById(tbody).innerHTML = "";

});

filter.on("click", function() {  

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node 
  // Get the value property of the input element
  var inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);
  console.log(dateData);

  var filteredData = tableData.filter(d => {
      return d.datetime === inputValue;
  });

  console.log(filteredData);

  var tbody = d3.select("tbody");

  filteredData.forEach(function(input) {
      var row = tbody.append("tr")
      
      Object.entries(input).forEach(function([key,value]) {
          row.append("td").text(value);
      });

    });
    

});
