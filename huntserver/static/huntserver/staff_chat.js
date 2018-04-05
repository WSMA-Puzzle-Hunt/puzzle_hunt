  function map_buttons() {
    $('.chatselect').click(function() {
      $('.chatselect').each(function() {
        $("#chat_" + $(this).data('id')).hide();
      });
      $("#chat_" + $(this).data('id')).show();
      curr_team = $(this).data('id');
      $("button[data-id=" + curr_team + "]").css("background-color", "white");
      $("#chatcontainer").scrollTop($("#chatcontainer")[0].scrollHeight);
    });
  }
$(document).ready(function() {
  map_buttons();
});
