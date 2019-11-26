  

//create jquery fucntion and  add [i] loop
$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {
    
        // create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column
        var col1 = $('<div class="col-sm-2"> <p class="hour">'+ showAMPM(i) '</p>');

        //create col2
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);        
       
        //create col3
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // append the rows to container
        $(".container").append(row);

  //create function to show AM and PM times (sourced from https://stackoverflow.com/questions/32802780/how-to-get-the-meridian-am-pm-with-momentsjs-and-angularjs)
  function showAMPM(hours) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
}
showAMPM();