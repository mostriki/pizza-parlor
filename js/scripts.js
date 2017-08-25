// back-end logic
function Pizza(movie, time, age, quantity) {
  this.piQuantity = quantity;
  this.piStyle = style;
  this.piSize = size;
  this.piToppings = toppings;
}

Pizza.prototype.totalPrice = function() {
  return '$' + (((this.piStyle + this.piSize) + this.piToppings) * this.piQuantity) + '.00';
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newTicket);

    var inputtedQuantity = parseFloat($('#piQuantity').val());
    var inputtedStyle = parseFloat($('#piStyle').val());
    var inputtedSize = parseFloat($('#piSize').val());
    var inputtedToppings = parseFloat($('#piToppings').val());

    var cartQuantity = $('#piQuantity option:selected').text();
    var cartStyle = $('#piStyle option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    var cartoppings = $('#piToppings option:selected').text();

    var newOrder = new Order(inputtedQuantity, inputtedStyle, inputtedSize, inputtedToppings);

    $('ul#receipt').append(cartQuantity + '' + cartStyle + '' + cartSize + '' + cartoppings + '' + newOrder.totalPrice());
  });

});
