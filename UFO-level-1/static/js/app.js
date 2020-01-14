// from data.js
var tableData = data;
var button = d3.select("button");
var tbody = d3.select("tbody");
var inputDateElement = d3.select(".form-control");

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

inputDateElement.on("change", function() {
    var newText = d3.event.target.value;
    //console.log(newText);
});
  



  
button.on("click", function() {
    tbody.html("");
    console.log("Hi you pressed the button!");
    // Select the input element and get the raw HTML node    
    // Get the value property of the input element
    var inputDate = inputDateElement.property("value");
    //console.log(inputDate);
    function matchDate(x){

    return x.datetime == inputDate;
    };

    var dateQuery = tableData.filter(matchDate);
    
//   var table = document.getElementById ("ufo-table");
//   console.log(table);
//   var tr = d3.selectAll("tr");
//   console.log(tr);
//   //tr.remove();

    dateQuery.forEach((i) => {
        var row = tbody.append("tr");
        Object.entries(i).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});

    
    //var tableMain = d3.select(".summary");

    //list.html("");
  
   
  
  