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

// updates display on page load
updateOutput();

//updtes output when textarea changes
$("textarea").on("change keyup paste", function () {
  updateOutput();
});

// ***************** functions *******************

function updateOutput() {
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<html><head><style type='text/css'>" +
        $("#cssPanel").val() +
        "</style></head><body>" +
        $("#htmlPanel").val() +
        "</body></html>"
    );
}
