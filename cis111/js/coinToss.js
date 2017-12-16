


//1. define onclick handler
function tossNumber(n){
    if( n<6 || n>9){
        displayError(n);
        return;
    }
    var toss1, toss2, toss3, rollCounter;
    //console.log(roll1);

    //reset the outputDiv
    $('outputDiv').html = ("");

    //reset the rollCount
    tossCounter = 0;

    //toss the coins
    toss1 = RandomInt(2, 3);  
    toss2 = RandomInt(2, 3); 
    toss3 = RandomInt(2, 3);
    tossCounter++;


    while(toss1 + toss2 + toss3 != n) {
        toss1 = RandomInt(2, 3);
        toss2 = RandomInt(2, 3);
        toss3 = RandomInt(2, 3); 
        tossCounter++;
    }

    displaySuccess(tossCounter);
    setTosses(toss1,toss2,toss3);


 }

function displaySuccess(counter){
    var POS;
    if(counter > 1){
        POS = "tosses!";
    }
    else{
        POS = "toss";
    }
    $('outputDiv').innerHTML = 'You hit your number in ' + 
        counter + ' ' + POS;

}

function displayError(errornumber){

    $('outputDiv').innerHTML = $('outputDiv').innerHTML = 
        'Error on input: ' + errornumber;
}


function setTosses (toss1, toss2, toss3){
   

    if( toss1 == 3 ){
        $("img1").src = "../images/Coin head" + ".jpg";
    }
    else{
        $("img1").src = "../images/Coin Tail" + ".jpg";
    }

    if( toss2 == 3 ){
        $("img2").src = "../images/Coin head" + ".jpg";
    }
    else{
        $("img2").src = "../images/Coin Tail" + ".jpg";
    }

    if( toss3 == 3 ){
        $("img3").src = "../images/Coin head" + ".jpg";
    }
    else{
        $("img3").src = "../images/Coin Tail" + ".jpg";
    }
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
//button1.onclick = UntilDoubles;
