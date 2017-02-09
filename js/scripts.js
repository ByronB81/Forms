$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val().toUpperCase();
    var person2Input = $("input#person2").val().toUpperCase();
    var dateInput= $("input#date").val().toUpperCase();
    var locationInput = $("input#location").val().toUpperCase();
    var timeInput = $("input#time").val().toUpperCase();
    var weatherInput = $("input#weather").val().toUpperCase();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".date").text(dateInput);
    $(".location").text(locationInput);
    $(".time").text(timeInput);
    $(".weather").text(weatherInput);

    $("#story").show();

    event.preventDefault();
  });
});
