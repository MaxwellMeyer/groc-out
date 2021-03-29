$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();
    let grocArr = [];
grocArr.push($("#g1").val(), $("#g2").val(), $("#g3").val(), $("#g4").val(), $("#g5").val());
grocArr.sort();
grocArr.forEach(function(groc) {
  $(".items").append(groc.toUpperCase()+ ", ");
  $("#groceries").hide();
  $(".results").show();
});
  });
});