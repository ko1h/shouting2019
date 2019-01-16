function upperCase(wordInput) {
  return wordInput.toUpperCase();
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var wordInput = $("input#word").val();
    var newUpperCase = upperCase(wordInput);

    $(".new-word").text(newUpperCase);

    $("#return").show();

    event.preventDefault();
  });
});
