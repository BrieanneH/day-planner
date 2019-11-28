$(document).ready(function(){
    $('#currentDay').text(moment().format("MM Do YY"));
    //creating my loop
    for (let i = 0; 9 < 18; i++) {

        var row = $('<div class = "row">');

        var col1= $('div class = "col-med-2"><p class ="hour">'+ convertAMPM(i) + '</p>');

        var caol2 = $('div class = "col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`)');
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        row.append(col1);
        row.append(col2);
        row.append(col3);
        $(".container").append(row);
     };

     function convertAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
convertAMPM();

function timeColors(){
    var currentTime = new Date ().getHours();
    for (var i = 9; i < 18;i ++){
        console.log(currentTime, $('$#{i})').data("time"));
        if ($('#${i}').data("time")== currentTime){
            $('#text${i}').addClass("present");
        }
        else if (currentTime < $('$#{i}').data("time")){
            $('#text${i}').addClass("future");
        }
     
    }


}

setInterval(function() {
    timeColors();
}, 1000);


var saveBtn = $(".saveBtn");
saveBtn.on('click',function(){
    let eventID=$(this).attr('id');
    let eventText=$(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventId, eventText);

    function getLocalStorage(){
        let value =loclStorage.getItem();
        if (value){
            $('#text').text(value);
        }
    }
}

});});

