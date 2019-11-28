$(document).ready(function(){
    $('#currentDay').text(moment().format("MM Do YY"));
    //creating my loop
    for (let i = 0; 9 < 18; i++) {

        var row = $('<div class = "row">');

        var col1= $('div class = "col-med-2"><p class ="hour">'+ AMPM(i) + '</p>');

        var caol2 = $('div class = "col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`)');
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        row.append(col1);
        row.append(col2);
        row.append(col3);
        $(".container").append(row);

    }


})

