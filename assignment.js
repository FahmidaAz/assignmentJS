//kilometer to meter function
function kilometerToMeter(num){
    if(num<=0){
        console.log("Input a valid number.");

    }else{
   var meter = num *1000;

   return meter;
    }
}

var kiloToMe = kilometerToMeter(35);

console.log(kiloToMe);

//budget Calculator function

function budgetCalculator(watch, mobile, laptop){
    var perWatchCost = 50;
    var perMobileCost = 100;
    var perLaptopCost = 500;

    var totalWatchBudget = watch * perWatchCost;
    var totalMobileBudget = mobile * perMobileCost;
    var totalLaptopBudget = laptop * perLaptopCost;

    var totalBudget = totalWatchBudget+ totalMobileBudget + totalLaptopBudget;

    return totalBudget;
}

var budget = budgetCalculator(20,25,30);

console.log("Your total budget should be $"+ budget);

//hotel cost function

function hotelCost(days){
    var totalCost;
    var firstPart;
    var secondPart;
    var thirdPart;
    var remaining;
    if(days<=10){
     totalCost =  days *100;
    }else if(days <=20){
        firstPart = 10 *100;
        remaining = days - 10;
        secondPart = remaining *80;
        totalCost = firstPart + secondPart;
    }else {
        firstPart = 10 *100;
        secondPart = 20 * 80;
        remaining = days - 20;
        thirdPart = remaining * 50;
        totalCost = firstPart +secondPart+ thirdPart;
    }

    return totalCost;
}
var days = 30;
var hotelCost = hotelCost(days);

console.log("You are staying in our hotel for "+ days+" days.");
console.log("Your total cost will be $"+hotelCost);


// mega friend function

function megaFriend(friends){
    var max = friends[0].length;
    var megaFriend;
    for(var i=0; i<friends.length; i++){
        if(friends[i].length>max)  {
            max = friends[i].length;
            megaFriend = friends[i];
        }
    }
    return megaFriend;
}

var friendsName = ["Jamal","Kamal","Hasan","Jhankar","Mehedi","Maymunaar","Bithi"];

var result = megaFriend(friendsName);
console.log("My mega friend's name is "+ result);