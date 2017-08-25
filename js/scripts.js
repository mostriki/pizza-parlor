// back-end logic
function Order(quantity, style, size, toppings) {
  this.piQuantity = quantity;
  this.piStyle = style;
  this.piSize = size;
  // this.piToppings = toppings;
}

 // + this.piToppings
Order.prototype.totalPrice = function() {
  return '$' + ((this.piStyle + this.piSize) * this.piQuantity) + '.00';
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newOrder);

    var inputtedQuantity = parseFloat($('#piQuantity').val());
    var inputtedStyle = parseFloat($('#piStyle').val());
    var inputtedSize = parseFloat($('#piSize').val());
    // var inputtedToppings = parseFloat($('.piToppings:checked').val());

    var cartQuantity = $('#piQuantity option:selected').text();
    var cartStyle = $('#piStyle option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    // var cartToppings = $('.piToppings:checked').text();
    // console.log(inputtedToppings);
    // console.log(cartToppings);

// , inputtedToppings
    var newOrder = new Order(inputtedQuantity, inputtedStyle, inputtedSize);

// cartToppings +
    $('ul#receipt').append(cartQuantity + ' ' + cartSize + ' ' + cartStyle + ' ' + ' ' + newOrder.totalPrice());
  });
});
