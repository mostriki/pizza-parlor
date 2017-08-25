// back-end logic
function Order(style, bread, size, quantity, toppings) {
  this.piStyle = style;
  this.piBread = bread;
  this.piSize = size;
  this.piQuantity = quantity;
  // this.piToppings = toppings;
}

 // + this.piToppings
Order.prototype.totalPrice = function() {
  return '$' + ((this.piStyle + this.piBread + this.piSize) * this.piQuantity) + '.00';
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newOrder);

    var inputtedStyle = parseFloat($('#piStyle').val());
    var inputtedBread = parseFloat($('#piBread').val());
    var inputtedSize = parseFloat($('#piSize').val());
    var inputtedQuantity = parseFloat($('#piQuantity').val());
    // var inputtedToppings = parseFloat($('.piToppings:checked').val());

    var cartStyle = $('#piStyle option:selected').text();
    var cartBread = $('#piBread option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    var cartQuantity = $('#piQuantity option:selected').text();
    // var cartToppings = $('.piToppings:checked').text();
    // console.log(inputtedToppings);
    // console.log(cartToppings);

// , inputtedToppings
    var newOrder = new Order(inputtedStyle, inputtedBread, inputtedSize, inputtedQuantity);

// cartToppings +
    $('ul#receipt').append(cartQuantity + ' ' + cartSize + ' ' + cartBread + ' ' + cartStyle + ' ' + newOrder.totalPrice());
  });
  $("#classicTitle").click(function() {
    event.preventDefault();
    $("#classic").show(800);
    $("#veggie").hide(800);
    $("#vegan").hide(800);
  });
  $("#veggieTitle").click(function() {
    event.preventDefault();
    $("#classic").hide(800);
    $("#veggie").show(800);
    $("#vegan").hide(800);
  });
  $("#veganTitle").click(function() {
    event.preventDefault();
    $("#classic").hide(800);
    $("#veggie").hide(800);
    $("#vegan").show(800);
  });
});
