// from data.js
var tableData = data;
var button = d3.select("button");
var tbody = d3.select("tbody");


// YOUR CODE HERE!
/*var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },*/

//   tableData.forEach(function(ufoReport) {
//     console.log(ufoReport);
//   });


  tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



  button.on("click", function() {
    console.log("Hi you pressed the button!")
    // Select the input element and get the raw HTML node
    var inputDateElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputDate = inputDateElement.property("value");
    
    console.log(inputDate);
    
    var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

    var changedData = filteredData;

    changedData.forEach((queryReport) => {
    var row = tbody.append("tr");
    Object.entries(queryReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
    
  });

    
    //var tableMain = d3.select(".summary");

    //list.html("");
  
   
  });
  