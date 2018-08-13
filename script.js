var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var DeleteItemsFromCart = function () { 
    cart = [];
    console.log(cart);
  }
  var sumOfItems = function(){
    var sum = 0;
    for(let i=0; i<cart.length; i++){
      sum +=cart[i]["price"];
    }
    $('.total').text(sum);
    console.log("sum",sum);
  }

  var updateCart = function () {
    console.log("updating");
    app.clearCart();
    var source = $('#cart-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(app);
    $('.cart-list').append(newHTML);
    sumOfItems();
  }


  var addItem = function (item, price) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    var newCartItem = { 
      name: item,
      price: price         
    }
    cart.push(newCartItem);
    console.log(cart);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    $('.cart-list').empty();
  }
  
  return {
    cart: cart,
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart,
    DeleteItemsFromCart: DeleteItemsFromCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  let item = $(this).closest('.item').data().name;
  let price = $(this).closest('.item').data().price;
  console.log("item",item, "price", price);
  app.addItem(item, price);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.DeleteItemsFromCart();
  app.updateCart();
});