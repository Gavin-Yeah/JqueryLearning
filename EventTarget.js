$(document).ready(function () {
    $("body").bind("click",bodyHandler)
    $("div").bind("click", divHandler)
    $("div").bind("click", divHandler2)
})
function bodyHandler(event) {
    console.log(event)
}
function divHandler(event) {
    console.log(event)
    // event.stopPropagation();  // cancel the parent propagation
    event.stopImmediatePropagation(); //all propagation

}
function divHandler2(event) {
    console.log(event)


}