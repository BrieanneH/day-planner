// have current date show inside of the jumboton
let date = moment().format("dddd, MMMM Do")
console.log('date', date)
let element = document.getElementById('currentDay')
console.log(element)
element.innerHTML = date

//creating a row
var row = $(`<div id='' class="row">`);

var col1 = $('<div class="col-sm-2"> <p class="hour">' + /*enter fucntion here*/ + '</p>');

 //create column 2
var col2 = $(`<div class="col-sm-8 past"><textarea id=text'' class="description" placeholder="Add your event here..."></textarea>`);        
       
//create column 3
var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=''></button>`)
// append col to row
row.append(col1);
row.append(col2);
row.append(col3);

// last step add rows to container
$(".container").append(row);
