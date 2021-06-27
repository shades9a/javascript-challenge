// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(ufoReport) {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

function redraw() {
data.forEach(function(ufoReport) {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });
};

var button = d3.select("#button");

var form = d3.select("#form");

button.on("click",runEnter);
form.on("submit",runEnter);

//var filteredData = filteredData.filter(row => row.datetime === date);
  
//filterufo = redraw.filter;
 function runEnter() {
  
   d3.event.preventDefault();
    
   var inputElement = d3.select("#datetime");

   var inputValue = inputElement.property("value");

   console.log(inputValue)

   d3.select("tbody").text(inputValue);

   d3.select(redraw.datetime).append;

 };

// 1. onclick runsenter 2. filter for date input 3. call redraw
// $('#datetime').on('keyup', function(){
//     var value = $(this).val()
//     console.log('Value:',value)
// })

// function buildTable(data){
//   for (var i = 0; i < data.length; i++){
//     var row = <tr>
//                 <th>${data[i].date}</th>
//               </tr>
//     table.innerHTML += row          
//   }
// }