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
