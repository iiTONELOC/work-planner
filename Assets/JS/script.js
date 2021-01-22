//display current day and time
var dayWeek = moment().format('LLLL');
console.log(dayWeek);
$('#currentDay').text(dayWeek);

//update the time every 30 seconds
var timeUpdate= setInterval(function(){
    let dayWeek = moment().format('LLLL');
console.log(dayWeek);
    $('#currentDay').text(dayWeek); 
},30000);

//timeblock status

$(document).ready(function(){ 
    
        $("textarea").each(function(index){
            if($(this).attr("data-value")==9){
            console.log("Yay you found 9!");}
            else{
                console.log("NOT 9!")
            }
        });
    
});


   
//auditTime();










//turn blank p elements into input fields
//$('#container').on('click','#description', function(){df

   // var textBox=$("<textarea>")
    //.addClass("ts col-10 description past");

    //$(this).replaceWith(textBox);
//});
   // turn them back upon save


