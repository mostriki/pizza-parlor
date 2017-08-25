// back-end logic
function Order(quantity, style, size) {
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
    // var inputtedToppings = parseFloat($('#piToppings').val());

    var cartQuantity = $('#piQuantity option:selected').text();
    var cartStyle = $('#piStyle option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    // var cartoppings = $('#piToppings option:selected').text();

// , inputtedToppings
    var newOrder = new Order(inputtedQuantity, inputtedStyle, inputtedSize);

 // + cartoppings + ''
    $('ul#receipt').append(cartQuantity + ' ' + cartSize + ' ' + cartStyle + ' ' + newOrder.totalPrice());
  });
});
