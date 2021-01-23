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
console.log("current time: " + currentTime +" hundred")
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
ten();
eleven();
noon();
one();
two();
three();
four();
five();
    
});
//update time slots if any data
function nine(){
    var nineAM=localStorage.getItem("9AM");
    //(nineAM);
    if(nineAM != null){
        document.getElementById('9').textContent=nineAM
    }
    
}
function ten(){
    var tenAM=localStorage.getItem("10AM");
    //(tenAM);
    if(tenAM != null){
        document.getElementById('10').textContent=tenAM
    }
    
}
function eleven(){
    var elevenAM=localStorage.getItem("11AM");
    //(elevenAM);
    if(elevenAM != null){
        document.getElementById('11').textContent=elevenAM
    }
    
}
function noon(){
    var twelvePM=localStorage.getItem("12PM");
    //(twelvePM);
    if(twelvePM != null){
        document.getElementById('12').textContent=twelvePM
    }
    
}
function one(){
    var onePM=localStorage.getItem("1PM");
    //(onePM);
    if(onePM != null){
        document.getElementById('13').textContent=onePM
    }
    
}
function two(){
    var twoPM=localStorage.getItem("2PM");
    //(twoPM);
    if(twoPM != null){
        document.getElementById('14').textContent=twoPM
    }
    
}
function three(){
    var threePM=localStorage.getItem("3PM");
    //(threePM);
    if(threePM != null){
        document.getElementById('15').textContent=threePM
    }
    
}
function four(){
    var fourPM=localStorage.getItem("4PM");
    //(fourPM);
    if(fourPM != null){
        document.getElementById('16').textContent=fourPM
    }
    
}
function five(){
    var fivePM=localStorage.getItem("5PM");
    //(fivePM);
    if(fivePM != null){
        document.getElementById('17').textContent=fivePM
    }
    
}



//auditTime();
setInterval(function(){ 
    
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

},60000);


// on save click get the text-area's value
$(".saveBtn").on("click", function(){
    

    if($(this).is("#saveBtn9")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("9AM", text);
    ;}
    if($(this).is("#saveBtn10")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("10AM", text);
    ;}
    if($(this).is("#saveBtn11")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("11AM", text);
    ;}
    if($(this).is("#saveBtn12")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("12PM", text);
    ;}
    if($(this).is("#saveBtn1")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("1PM", text);
    ;}
    if($(this).is("#saveBtn2")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("2PM", text);
    ;}
    if($(this).is("#saveBtn3")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("3PM", text);
    ;}
    if($(this).is("#saveBtn4")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("4PM", text);
    ;}
    if($(this).is("#saveBtn5")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    //
        //save the data to local storage
        localStorage.setItem("5PM", text);
    ;}

    
})

})

