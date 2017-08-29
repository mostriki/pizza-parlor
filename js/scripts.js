// back-end logic
// , toppings
function Order(style, bread, size, quantity) {
  this.piStyle = style;
  this.piBread = bread;
  this.piSize = size;
  this.piQuantity = quantity;
  this.piToppings = toppings;
}


Order.prototype.totalPrice = function() {
  return '$' + ((this.piStyle + this.piBread + this.piSize) * this.piQuantity  + this.piToppings);
}

var inputtedToppings = 0

function toppings() {
  $('input[type=checkbox]:checked').each(function() {
    inputtedToppings += parseFloat($(this).val());
  });
  console.log(inputtedToppings);
}

// front-end logic
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#receipt").empty(newOrder);
    $('#container1').slideUp();
    $('#container2').show(1000);

    var inputtedStyle = parseFloat($('#piStyle').val());
    var inputtedBread = parseFloat($('#piBread').val());
    var inputtedSize = parseFloat($('#piSize').val());
    var inputtedQuantity = parseFloat($('#piQuantity').val());
    toppings();

    var cartStyle = $('#piStyle option:selected').text();
    var cartBread = $('#piBread option:selected').text();
    var cartSize = $('#piSize option:selected').text();
    var cartQuantity = $('#piQuantity option:selected').text();
    // var cartToppings = $('input[name="cheese"]').text();
    // console.log(cartToppings);


    var newOrder = new Order(inputtedStyle, inputtedBread, inputtedSize, inputtedQuantity, inputtedToppings);

// + cartToppings
    $('h4#receiptDescription').append('You ordered ' + cartQuantity + ' ' + cartSize + ' ' + cartBread + ' ' + cartStyle);

    $('h4#receiptTotal').append('Your total comes to ' + newOrder.totalPrice());
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
