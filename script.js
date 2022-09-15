function calcAndShowTotal() {
  var total = 0;
  $("#list :radio:checked").each(function () {
    total += parseFloat($(this).attr("value")) || 0;
  });
  $("#total").val(total);
}

$("#list :radio").change(calcAndShowTotal).change();