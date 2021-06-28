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

function filter(){
  var FilterValue, input, ul, li,i;

  input  = document.getElementById('datetime');
  FilterValue = input.value().toUpperCase();
  ul = document.getElementById('ufo-table')
  li = ul. getElementsByTagName('th');

  for(i=0;i<length;i++){
    var a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(FilterValue) > -1){
      li[i].style.display = "";
    }else{
      li[i].style.display = "none";
    }
  }
}