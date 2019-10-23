$(document).ready(function() {
  $("#form1").submit(function(event) {
    var name1 = $("input#name1").val();
    var noun1 = $("input#noun1").val();
    var verb1 = $("input#verb1").val();

    $(".name1").text(name1);
    $(".noun1").text(noun1);
    $(".verb1").text(verb1);

    $("#story").show();

    event.preventDefault();

  });
});
