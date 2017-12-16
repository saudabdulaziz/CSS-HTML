


//1. define onclick handler
function tossNumber(n){
    if( n<6 || n>9){
        displayError(n);
        return;
    }
    var toss1, toss2, toss3, rollCounter;
    //console.log(roll1);

    //reset the outputDiv
    $('outputDiv').innerHTML = "";

    //reset the rollCount
    tossCounter = 0;

    //first roll of the dice
    toss1 = Math.floor(Math.random() * 2) + 1;  
    toss2 = RandomInt(1, 2); 
    toss3 = RandomInt(1, 2);
    tossCounter++;


    while(toss1 + toss2 + toss3 != n) {
        toss1 = Math.floor(Math.random() * 2) + 1;  
        toss2 = RandomInt(1, 2);
        toss3 = RandomInt(1, 2); 
        tossCounter++;
    }
    displaySuccess(tossCounter);
    settoss(toss1,toss2,toss3);


 }

function displaySuccess(counter){
    var POS;
    if(counter > 1){
        POS = "tosses!";
    }
    else{
        POS = "toss";
    }
    $('outputDiv').innerHTML = $('outputDiv').innerHTML + 
    'You hit your number in ' + 
    counter + ' ' + POS;

}

function displayError(errornumber){

    $('outputDiv').innerHTML = $('outputDiv').innerHTML = 
        'Error on input: ' + errornumber;
}


function setTosses (toss1, toss2, toss3){
    $("img1").src = "../images/die" + toss1 + ".gif";
    $("img2").src = "../images/die" + toss2 + ".gif";
}


//2. grab the button
 var button1 = $("btn1");

//3. register the onclick handler
button1.onclick = function(){
    tossNumber(document.getElementById("inputBox").value);
}


//2. grab the button
 var button1 = $("btn1");

//3. register the onclick handler
//button1.onclick = FlipUntilDoubles;
