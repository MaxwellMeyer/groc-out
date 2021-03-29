$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();
    let grocArr = [];
grocArr.push($("#g1").val(), $("#g2").val(), $("#g3").val(), $("#g4").val());
grocArr.sort();
grocArr.forEach(function(groc) {
  if (grocArr.indexOf(groc) !== grocArr.length - 1) {
  $(".items").append(groc.toUpperCase()+ ", ");
  } else {$(".items").append(groc.toString().toUpperCase());
}
  $("#groceries").hide();
  $(".results").show();
});
  });
});