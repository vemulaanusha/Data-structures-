 var queue = [];
 var front = 0;
 var rear = 0;
 var first = document.createElement("p");

 function enqueue() {
     if (document.getElementById("in").value == 0) {
         // document.getElementById("alert").innerHTML = "NULL values are not accepted"  
         alert("null values are not accepeted");
     } else {
         if (rear == 1000) {
             alert("queue is full it reached  the max limit");
         }
         var que = document.getElementById("in").value;
         queue.push(que);


         console.log(queue);

         first.setAttribute("id", "p" + rear);
         rear++;
         console.log("front,rear" + front + rear);
         first.innerHTML = queue.join(" ");
         $(".pp").append(first);

     }
 }

 function dequeue() {
     if (rear == front) {
         document.getElementById("alert").innerHTML = "queue is empty we cannot delete the elemnts "
     } else {
         var S = document.getElementById("in").value;
         console.log("front,rear" + front + rear);
         queue.shift(S);
         first.innerHTML = queue.join(" ");
         console.log(queue);
         front++;
         // document.getElementById("alert").innerHTML = "deleted element is" +a
     }
 }

 function isEmpty() {
     if (rear == front) {
         alert("queue is empty");
     } else {
         alert("queue is not empty");
     }
 }

 function isFull() {
     if (rear - front == 1000) {
         alert("queue is full");
     } else {
         alert("queue is not full");
     }
 }
