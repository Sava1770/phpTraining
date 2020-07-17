
var userBudget = prompt("Declair your budget");

var shopName  = prompt("The name of your shop");

var mainList = {
   budget: userBudget,
   name: shopName,
   shopGoods: [],
   employers: {},
   open: false    
};

for(var i = 0; i < 3; i++){
    mainList.shopGoods[i] = prompt("What type of product we will sell?");
}

alert("Your daily budget is " + (mainList.budget / 30));

