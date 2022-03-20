//pizza constructor
function Pizza(pizzaSize, crustType, topping,numberof, delivery){
  this.pizzaSize = pizzaSize
  this.crustType = crustType
  this.topping = topping
  this.numberof = numberof
  this.delivery = delivery

 }
 // function to calaculate total price
//pizza prototype
let totalOfTotals = 0;

  Pizza.prototype.calculatePrice = function(){

    let deliveryprize;
    let pizzaPrice;
    let crustPrize ;
    let toppingPrize;
    let numberofPizza;
    
   if(this.pizzaSize ==="small"){
     pizzaPrice = 350
   }else if(this.pizzaSize ==="medium"){
     pizzaPrice = 600
   }else{
     pizzaPrice = 800
   }
   
    if(this.crustType  === "crispy"){
      crustPrize = 150
    }else if(this.crustType === "stuffed"){
      crustPrize = 100
    }else{
      crustPrize = 70
    }
   
    if(this.topping ==="Roasted Tomatoes"){
      toppingPrize = 30
    }else if(this.topping ==="Roasted Artichokes")
    {toppingPrize =35  
  
    }else{
      toppingPrize = 40
    }
   if(this.numberof <=0 ){
     numberofPizza = 0
   }else{
     numberofPizza = this.numberof
   }
   if(this.delivery === "Yes"){
     deliveryprize = 100
   }else{
     deliveryprize = 0
   }
   
    let totalPrice = (pizzaPrice + crustPrize + toppingPrize) * numberofPizza
    let total = totalPrice + deliveryprize

    totalOfTotals += total
   return total
  }

// $(document).ready(function(){
//   $("button#order").click(function(e){
//     e.preventDefault()
//     let pizza =$("#pizzaSize").find("option:selected").val()
//     let crust =$("#crustType").find("option:selected").val()
//     let topping=$("#topping").find("option:selected").val()
//     let pizzaNumber = $("#noOfPizza").val()
//     let delivery = $("input[name = 'Yes']:checked").val()
//     let newOrder = new Pizza(pizza, crust, topping , pizzaNumber, delivery)

//    $("#orders").append(
//     "<tr>"+ "<td>" + pizza +"</td>" +  "<td>"+ crust+"</td>" + 
//    " <td>"+ topping +"</td>" + "<td>"+ pizzaNumber + "</td>" +
//    "<td>"+ newOrder.calculatePrice() + "</td>" + 
//     "</tr>"  
//    )
  
//   })
// });
// $("#yes").click(function(){
//   $(".addons").show()
// })
// $("#no").click(function(){
//   $(".addons").hide()
// })
// $("#checkout").click(function(){
//  console.log(totalOfTotals)
//  $(".last").text(`The Total of Your Order is : ${ totalOfTotals}`)

// })





// //carousel js
// document.addEventListener("DOMContentLoaded", function(){
//   var element = document.getElementById("myCarousel");
//   var myCarousel = new bootstrap.Carousel(element, {
//       interval: 2000
//   });
// });