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
        ten();
        eleven();
        noon();
        one();
    
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
function ten(){
    var tenAM=localStorage.getItem("10AM");
    console.log(tenAM);
    if(tenAM != null){
        document.getElementById('10').textContent=tenAM
    }
    //document.getElementById('#9').textContent=localStorage.getItem("9AM");
}
function eleven(){
    var elevenAM=localStorage.getItem("11AM");
    console.log(elevenAM);
    if(elevenAM != null){
        document.getElementById('11').textContent=elevenAM
    }
    //document.getElementById('#9').textContent=localStorage.getItem("9AM");
}
function noon(){
    var twelvePM=localStorage.getItem("12PM");
    console.log(twelvePM);
    if(twelvePM != null){
        document.getElementById('12').textContent=twelvePM
    }
    //document.getElementById('#9').textContent=localStorage.getItem("9AM");
}
function one(){
    var onePM=localStorage.getItem("1PM");
    console.log(onePM);
    if(onePM != null){
        document.getElementById('13').textContent=onePM
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
    if($(this).is("#saveBtn10")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("10AM", text);
    ;}
    if($(this).is("#saveBtn11")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("11AM", text);
    ;}
    if($(this).is("#saveBtn12")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("12PM", text);
    ;}
    if($(this).is("#saveBtn1")){
        var text = $(this)
    .siblings(".description")
    .val()
    .trim();
    console.log(text)
        //save the data to local storage
        localStorage.setItem("1PM", text);
    ;}

    
})

})

