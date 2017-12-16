


//1. define onclick handler
function rollNumber(n){
    var roll1, roll2, rollCounter;
    //console.log(roll1);

    //reset the outputDiv
    $('outputDiv').innerHTML = "";

    //reset the rollCount
    rollCounter = 0;

    //first roll of the dice
    roll1 = Math.floor(Math.random() * 6) + 1;  
    roll2 = RandomInt(1, 6); 
    rollCounter++;


    while(roll1 + roll2 != n) {
        roll1 = Math.floor(Math.random() * 6) + 1;  
        roll2 = RandomInt(1, 6); 
        rollCounter++;
    }
    setDice(roll1,roll2);
 }



function setDice (die1, die2){
    $("img1").src = "../images/die" + die1 + ".gif";
    $("img2").src = "../images/die" + die2 + ".gif";
}

//2. grab the button
 var button1 = $("btn1");

//3. register the onclick handler
button1.onclick = function(){
    rollNumber(document.getElementById("inputBox").value);
};
    /*
//congratulate the user
if(rollCounter == 1)
    POS = "roll!"
else
    POS = "rolls!"

//update the two images
$("img1").src = "../images/die" + roll1 + ".gif";

 $('outputDiv').innerHTML = $('outputDiv').innerHTML + 
 roll1 +'-' + roll2 +  '<br>' +
'TOy hit your number In' + 
rollCounter + ' ' + POS;
}

//2. grab the button
 var button1 = $("btn1");

//3. register the onclick handler
button1.onclick = RollUntilDoubles;
*/