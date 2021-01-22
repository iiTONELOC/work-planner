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
var currentTime=moment().format('H');
console.log("current time: " + currentTime)
$(document).ready(function(){ 
    
        $("textarea").each(function(index){
            $(this).removeClass("past future present")
            if($(this).attr("data-value")===currentTime){
            console.log("Yay you found the current time!");
            $(this).addClass("present");
        }else if($(this).attr("data-value") >currentTime){
                console.log("This is the FUTURE!");
                $(this).addClass("future");
            }else if($(this).attr("data-value") <currentTime){
                $(this).addClass("past");
                console.log("this is the past")
            }
        });
    
});


   
//auditTime();
setInterval(function(){ 
    
    $("textarea").each(function(index){
        $(this).removeClass("past future present")
        if($(this).attr("data-value")===currentTime){
        console.log("Yay you found the current time!");
        $(this).addClass("present");
    }else if($(this).attr("data-value") >currentTime){
            console.log("This is the FUTURE!");
            $(this).addClass("future");
        }else if($(this).attr("data-value") <currentTime){
            $(this).addClass("past");
            console.log("this is the past")
        }
    });

},60000);










//turn blank p elements into input fields
//$('#container').on('click','#description', function(){df

   // var textBox=$("<textarea>")
    //.addClass("ts col-10 description past");

    //$(this).replaceWith(textBox);
//});
   // turn them back upon save


