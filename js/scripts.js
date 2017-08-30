// back-end logic
function Order(style, bread, size, quantity) {
  this.piStyle = style;
  this.piBread = bread;
  this.piSize = size;
  this.piQuantity = quantity;
  this.piToppings = 0;
}

Order.prototype.totalPrice = function() {
  return '$' + ((this.piStyle + this.piBread + this.piSize + this.piToppings) * this.piQuantity);
}

Order.prototype.addTopping = function(value) {
  this.piToppings += value;
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newOrder);
    $('#container1').slideUp();
    $('#container2').show(1000);

//grab form values
    var inputtedStyle = parseFloat($('#piStyle').val());
    var inputtedBread = parseFloat($('#piBread').val());
    var inputtedSize = parseFloat($('#piSize').val());
    var inputtedQuantity = parseFloat($('#piQuantity').val());

//grab form selections
    var cartStyle = $('#piStyle option:selected').text();
    var cartBread = $('#piBread option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    var cartQuantity = $('#piQuantity option:selected').text();

//new order block
    var newOrder = new Order(inputtedStyle, inputtedBread, inputtedSize, inputtedQuantity);

//grab values from checkboxes
  $('input[type=checkbox]:checked').each(function(index, checkbox) {
    newOrder.addTopping(parseFloat($(checkbox).val()));
  });

//describes order items on receipt
    $('h4#receiptDescription').append('You ordered ' + cartQuantity + ' ' + cartSize + ' ' + cartBread + ' ' + cartStyle);

//calculates order total on receipt
    $('h4#receiptTotal').append('Your total comes to ' + newOrder.totalPrice());
  });

  //show/hide pizza type descriptions
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
