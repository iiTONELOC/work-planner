//display current day and time
var dayWeek = moment().format('LLLL');
console.log(dayWeek);

$('#currentDay').text(dayWeek);

//turn blank p elements into input fields
$('#container').on('click','#description', function(){
    

    var textBox=$("<textarea>")
    .addClass("ts col-10 description past");

    $(this).replaceWith(textBox);
});
   // turn them back upon save


