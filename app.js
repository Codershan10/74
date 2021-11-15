var number1;
var number2;
var execute;

function Compare(){
    number1= parseInt(document.getElementById("num1").value);
    number2= parseInt(document.getElementById("num2").value);

    if(number1==0 && number2==0){
        document.getElementById("output1").innerHTML="Number should be 0";
    }
    else{
        document.getElementById("output1").innerHTML=number1;
        document.getElementById("output1").innerHTML=number2;
        if(number1>number2){
            document.getElementById("output3").innerHTML="The first number is greater than the second";
        }
        else if(number1==number2){
            document.getElementById("output3").innerHTML="The numbers are equal";
        }
        else{
            document.getElementById("output3").innerHTML="The first number is smaler than the second";
        }
    }
}

function Evaluate(){
    execute=document.getElementById("operation").value;
    switch(execute){
        case "add":
            document.getElementById("output4").innerHTML=(number1+number2);
            break;
        case "subtract":
             document.getElementById("output4").innerHTML=(number1-number2);
             break;
        case "multiply":
             document.getElementById("output4").innerHTML=(number1*number2);
             break;
        case "divide":
             document.getElementById("output4").innerHTML=(number1/number2);
             break;
        default:
            document.getElementById("output4").innerHTML="Please enter the appropriate operation";
            break;
    }

}

function Reload(){
    location.reload();
}
