// back-end logic
function Pizza(movie, time, age, quantity) {
  this.piStyle = style;
  this.piSize = size;
  this.piToppings = toppings;
  this.piQuantity = quantity;
}

Pizza.prototype.totalPrice = function() {
  return '$' + ((this.piStyle + this.piSize) - this.piToppings) * this.piQuantity + '.00';
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newTicket);

    var inputtedStyle =
    var inputtedSize =
    var inputtedToppings =
    var inputtedQuantity =

    var cartStyle =
    var cartSize =
    var cartoppings =
    var cartQuantity =

    var newOrder = new Order(inputtedStyle, inputtedSize, inputtedToppings, inputtedQuantity);

    $('ul#receipt').append( + newOrder.totalPrice());
  });

});
