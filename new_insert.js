var array = [1000];
var i;
var up = 0;
function insert() {
    if (document.getElementById("in").value ==0) 
    {
        alert("NULL values are not accepted. enter values") 
 
    } else {
        if (up == (1000 - 1)) 
        {
            console.log("stack is full");
        } 
        else {
           var av = document.getElementById("in").value;
           array.push(av);
           f1 = array[up+1];
           up++;
           var first = document.createElement("p");
           first.setAttribute("id","p"+up);
           first.innerHTML = f1;
           $(".pp").prepend(first);
          // document.getElementById("alert").innerHTML = "value is inserted" +f1
           console.log(array)
        }
    }
    }
function pop() {
    if (up == 0) {
        alert("stack is empty");
       // document.getElementById("alert").innerHTML = "stack is empty"
    } else {
        var S = document.getElementById("in").value;
        document.getElementById("p"+up).remove();
        array.pop(S);
        up--;
        //document.getElementById("alert").innerHTML = "value is deleted"
        console.log(array);
          
  }
}
function peek(){
    var top=array[up];
            alert(top);
    console.log(array[up]);
}

function isempty(){
    if (up != 0) {
       // document.getElementById("alert").innerHTML = "stack is not empty that means you can insert more in"
    alert("stack is not empty");
    } else {
        //document.getElementById("alert").innerHTML = "first insert in the stack"
        alert("insert elements in the stack");
    }
}
