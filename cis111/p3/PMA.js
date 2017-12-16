
/*
Begin PMA
    var i = 7, j = 10, prod = 0;
    
    while(i not equal 0)
        if(i is odd)
            prod = prod + j
        divide i by 2, and discard remainder
        double j
        
    display i, j, prod
    */

    var PMA = function(i,j){
    	var prod = 0;

    	while(i != 0){
        if(i % 2 == 1)
            prod = prod + j;
        //divide i by 2, and discard remainder
        i = Math.floor(i / 2);

        //double j
        j = j * 2;
    }

    //return i * j
    return prod;
 };