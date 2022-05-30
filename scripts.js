$(".toggleButton").hover(
  function () {
    $(this).addClass("highlightedBtn");
  },
  function () {
    $(this).removeClass("highlightedBtn");
  }
);

$(".toggleButton").click(function () {
  $(this).toggleClass("active");
  $(this).removeClass("highlightedBtn");

  let panelID = $(this).attr("id") + "Panel";
  $("#" + panelID).toggleClass("hidden");

  let numberActivePanels = 4 - $(".hidden").length;

  $(".panel").width($(window).width() / numberActivePanels) - 10;
});

$(".panel").height($(window).height() - $("#header").height() * 2);

$(".panel").width($(window).width() / 2) - 10;

$("iframe").contents().find("html").html($("#htmlPanel").val());

$("textarea").on("change keyup paste", function () {
  $("iframe").contents().find("html").html($("#htmlPanel").val());
});
