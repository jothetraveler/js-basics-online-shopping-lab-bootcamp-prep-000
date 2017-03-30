var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){

  if(cart.length == 0){
    return "Your shopping cart is empty."
    }
  else{
  //for(var i = 0; cart.length > i; i++){
    var key = Object.keys(cart[0])
	   var keyTwo = Object.keys(cart[1])
	    var keyThree = Object.keys(cart[2])

      return `In your cart, you have ${key} at $${cart[0][key]}, ${keyTwo} at $${cart[1][keyTwo]}, ${keyThree} at $${cart[2][keyThree]}.`
  		}

}

function removeFromCart(itemName){
  if(cart.hasOwnProperty(`${itemName}`)){
    var index = cart.indexOf(`${itemName}`)
    cart.splice(index, 1)
    return cart
  }
else{
  return "That item is not in your cart."
}


}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
