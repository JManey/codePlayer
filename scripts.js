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
});

$(".panel").height($(window).height() - $("#header").height() * 2);

$(".panel").width($(window).width() / 2 - 10);

$("iframe").contents().find("html").html($("#htmlPanel").val());

$("textarea").on("change keyup paste", function () {
  $("iframe").contents().find("html").html($("#htmlPanel").val());
});
