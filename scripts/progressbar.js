/** @format */

$(document).ready(function () {
  $(".bar").progressbar();
  $("#html").progressbar({ value: 68, max: 100 });
  $("#css").progressbar({ value: 80, max: 100 });
  $("#js").progressbar({ value: 60, max: 100 });
  $("#jquery").progressbar({ value: 48, max: 100 });
  $("#nodejs").progressbar({ value: 62, max: 100 });
  $("#mysql").progressbar({ value: 65, max: 100 });
  $("#java").progressbar({ value: 52, max: 100 });
});
