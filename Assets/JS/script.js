//display current day and time
var dayWeek = moment().format('LLLL');
console.log(dayWeek);

$('#currentDay').text(dayWeek);
