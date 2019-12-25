$(document).ready(function () {
    alert("load successfully")
    $("p").click(function () {
        $(this).hide()
    })
})
$(document).ready(function () {
    $("button").click(function () {
        $("#pid").text("changed")

    })
    $("button").dblclick(function () {
        $(".pclass").text("change")
    })
    $("button").mouseenter(function () {
        $(".p2").text("mouseenter")
    })

})