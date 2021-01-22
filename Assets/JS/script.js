//display current day and time
$(document).ready(function(){
var dayWeek = moment().format('LLLL');
console.log(dayWeek);
$('#currentDay').text(dayWeek);

//update the time every 30 seconds
var timeUpdate= setInterval(function(){
    let dayWeek = moment().format('LLLL');
console.log(dayWeek);
    $('#currentDay').text(dayWeek); 
},15000);

//time-block status
var currentTime=moment().format('H');
console.log("current time: " + currentTime)
$(document).ready(function(){ 
    
        $("textarea").each(function(index){
            $(this).removeClass("past future present")
            if($(this).attr("data-value")===currentTime){
            //console.log("Yay you found the current time!");
            $(this).addClass("present");
        }else if($(this).attr("data-value") >currentTime){
                //console.log("This is the FUTURE!");
                $(this).addClass("future");
            }else if($(this).attr("data-value") <currentTime){
                $(this).addClass("past");
                //console.log("this is the past")
            }
        });

        //load time slots
        nine();
    
});
//update time slots if any data
function nine(){
    var nineAM=localStorage.getItem("9AM");
    console.log(nineAM);
    if(nineAM != null){
        document.getElementById('9').textContent=nineAM
    }
    //document.getElementById('#9').textContent=localStorage.getItem("9AM");
}


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


// on save click get the text-area's value
$(".saveBtn").on("click", function(){
    

    if($(this).is("#saveBtn9")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("9AM", text);
    ;}
    //console.log
})

})

