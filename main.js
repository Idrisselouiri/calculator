let inputValue = document.getElementById("input-screen") ;
let expression = "";

function showValue(num){
    expression += num  ;
    inputValue.value = expression ;
}
function equal(){
    inputValue.value = eval(expression);
    expression = ""
}
function deleteData(){
    expression = "" ; 
    inputValue.value = expression
}