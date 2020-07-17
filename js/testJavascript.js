let userBudget, time, shopName, price;

function start(){
   
    userBudget = prompt("Declair your budget");
    
    while(isNan(userBudget) || userBudget == "" ||  userBudget === null){
         userBudget = prompt("Declair your budget");
    }
     

    shopName  = prompt("The name of your shop").toUpperCase();
    time = 21;
}

start();

var mainList = {
   budget: userBudget,
   name: shopName,
   shopGoods: [],
   employers: {},
   open: false,
   discount:false
};

function chooseGoods(){
    for(let i = 0; i < 3; i++){
        let a = prompt("What type of product we will sell?");

        if(typeof(a) === "string" && a !== '' && a.length < 50){
            mainList.shopGoods[i] = a;
        }else{
            i--;
        }
}

chooseGoods();

function  workTime(time){
    if(time < 0 && time > 24){
        console.log("cannot be");
    }else if(time > 8 && time < 20){
        console.log("time to work");
    }else if(time < 24 && time < 3){    
        console.log("its too late");
    }else{
        console.log("too early");
    }
}

workTime(time);

function countBudget(budget){
    return budget / 30;
};

function discountAdd(discount,price){
    if(discount === true){
        return price * 0.8;
    }
    return price;
}

function employerHire(){
    let employer;
    for(let i = 0; i < 4; i++){
        employer = prompt("Please give the employer name:");
        mainList.employers[i] = employer;
    }
}

discountAdd(mainList.discount, mainList.price);

alert("Your daily budget is " + countBudget(mainList.budget));

