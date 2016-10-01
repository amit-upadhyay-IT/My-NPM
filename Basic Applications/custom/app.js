// some mathematical calculations will be performed in some other file and
// through this file we will be calling those functions written in other file.

function addition(x, y){
    console.log("Addition of "+x+" and "+y+"is " +(x+y));
}

function multiplication(x, y){
    console.log("Multiplication of "+x+" and "+y+"is " +(x*y));
}

addition(3, 7);

multiplication(2, 5);
