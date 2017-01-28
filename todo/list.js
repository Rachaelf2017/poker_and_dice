
// This code runs when the page loads
$(function() {

  $("li").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    // remove the element
    elementThatWasClicked.remove()
  })

})
