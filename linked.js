/* LinkedList */

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return document.getElementById("5").value=length;
  };

  this.head = function(){
    return document.getElementById("6").value=head.element;

  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.isEmpty = function() {
    if(length===0)
    return document.getElementById('isEmpty').value='true';
    else
    return document.getElementById('isEmpty').value='false';
  };

  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return document.getElementById('4.1').value=index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return document.getElementById('3.1').value=currentNode.element;
  };


  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }

  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return document.getElementById('2.3').value=currentNode.element;
  }
  this.display=function(){
    var list=document.getElementById('row');
    while(list.hasChildNodes()) {var i=0;
      list.removeChild(list.childNodes[i]);
     i++;
   }
    var currentNode = head;

    while(currentNode!==null){

        var newDiv = document.createElement("a");
        newDiv.classList.add('icon');
          var newContent = document.createTextNode(currentNode.element);
          newDiv.appendChild(newContent);
          var xx=document.createElement("nn");
          xx.classList.add('right');
  document.getElementById('row').appendChild(newDiv);
  document.getElementById('row').appendChild(xx);
          currentNode  = currentNode.next;


    }
  };

}
var ll = new LinkedList();
