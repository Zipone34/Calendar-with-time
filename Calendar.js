$(function() {
    $('#dateTimepicker1').datetimepicker();
})

var firstOpen = true;
var time;

$('#timePicker').datetimepicker({
useCurrent: false,
format: "hh:mm A"
}).on('dp.show', function() {
if(firstOpen) {
time = moment().startOf('day');
firstOpen = false;
} else {
time = "01:00 PM"
}
$(this).data('DateTimePicker').date(time);
});