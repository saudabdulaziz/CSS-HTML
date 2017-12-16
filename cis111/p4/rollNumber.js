


//1. define onclick handler
function rollNumber(n){
    if( n<2 || n>12){
        displayError(n);
        return;
    }
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
    displaySuccess(rollCounter);
    setDice(roll1,roll2);


 }

function displaySuccess(counter){
    var POS;
    if(counter > 1){
        POS = "rolls!";
    }
    else{
        POS = "roll!";
    }
    $('outputDiv').innerHTML = $('outputDiv').innerHTML + 
    'You hit your number in ' + 
    counter + ' ' + POS;

}

function displayError(errornumber){

    $('outputDiv').innerHTML = $('outputDiv').innerHTML = 
        'Error on input: ' + errornumber;
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
}


//2. grab the button
 var button1 = $("btn1");

//3. register the onclick handler
button1.onclick = RollUntilDoubles;
