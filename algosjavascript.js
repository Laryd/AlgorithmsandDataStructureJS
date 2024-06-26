//stack
//analogy is stacking books on top of each other
//methods used
// push - placing items on stack
// pop - removing from stack
// peek - displaying top element on stack
// length - show length of stack

//application example
//Test is a word is a palindrome
console.log("stack");
const letters = []; //this here is our stack
const word = "racecar";
let rword = "";
//putting letters into the stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
//pop off letters adding them to the empty string in reverse order.
//pop removes the last item and returns it
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}
if (rword === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}

//node algosjavascript.js
//racecar is a palindrome

//And Now Creating our Stack from scratch
const Stack = function () {
  this.count = 0;
  this.storage = {};

  //adds value to the end of stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  //removes and returns value at the end of stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  //the size of the stack
  this.size = function () {
    return this.count;
  };

  //peek the top value
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

//application of our stack now
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek); //item on top is 2
console.log(myStack.pop); //item on top is removed and it is 2 which is then returned
console.log(myStack.peek); //item on top is now 1 now that 2 was popped off

//"this" is a keyword in JavaScript that refers to the current object that the code is being executed in.
// It can be used to access properties and methods of the current object,
// as well as to set the value of the "this" keyword within a given scope.
//Here's an example to help illustrate the concept:

const person = {
  name: "John",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: "Hello, my name is John"
// In this example, the "this" keyword is being used to access the "name" property of the "person" object.
// The value of "this" within the greet method is set to refer to the "person" object,
// so when we call person.greet(), the output is "Hello, my name is John"

//Sets
console.log("Sets data structure");
function mySet() {
  // the const collection will hold the set
  const collection = [];
  this.has = function (element) {
    //this method will check for the presence of an element and return true or false
    return collection.indexOf(element) !== -1;
  };
  //this method will return all the elements in the set
  this.values = function () {
    return collection;
  };
  //this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      //does the collection have the element?
      collection.push(element);
      return true;
    }
    return false;
  };
  //this method will remove an element from a set
  this.remove = function (element) {
    //in es6 this method is delete
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1); //remove one element at the index 
      return true;
    }
    return false;
  };
  //this method will return the size of the collection
  this.size = function () {
    //not a method in es6 it's a property
    return collection.length;
  };
  //this method will return the union of two sets
  //general set methods
  this.union = function (otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  //this will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  //this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

const setA = new mySet();
const setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB)); //true

console.log(setA.intersection(setB).values()); // ['a']

console.log("built in set");

const setC = new mySet();
const setD = new mySet();

setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");

console.log(setC.subset(setD)); //true

console.log(setC.intersection(setD).values()); // [object set iterator]
setD.remove("a");
console.log(setD.has("a"));

//Queue
console.log("queue data structure");
//first in first out. An analogy of this is waiting in a queue in a bank.
//It basically is first come first serve
//Another example is a print queue, documents sent to be printed will print according to the one
//that arrived first.
//just like stack it can be implemented using an array
//basically implements push to put element at the end of array, and and shift
//instead of pop to remove the first element of an array instead of the last
function Queue() {
  const collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function (element) {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
console.log("queue outputs");
const myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue("d");
myQueue.print(); //['a', 'b', 'c', 'd' ]
myQueue.dequeue("a");
myQueue.print(); //['b', 'c', 'd' ]
console.log(myQueue.front()); //['b']
console.log(myQueue.size()); //3
console.log(myQueue.isEmpty()); //false

//another way to create a queue is a priority queue
//you pass the priority of the element

function PriorityQueue() {
  const collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        //checking priorities
        if (element[1] < collection[i][1]) { //keep in mind the collection is an array containing [element, priority]
          collection.splice(i, 0, element); //this here tells to start at index i, and add element to that index without removing any element
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function (element) {
    const value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

//priority queue example
console.log("priorityqueues")

const pq = new PriorityQueue();
pq.enqueue(["Omego Ken", 3]);
pq.enqueue(["Hillary Omamo", 1]);
pq.enqueue(["Eugene Omamo", 5]);
pq.enqueue(["Japheth Okune", 3]);
pq.printCollection(); //[ [ 'Hillary Omamo', 1 ], [ 'Omego Ken', 3 ], [ 'Japheth Okune', 3 ],[ 'Eugene Omamo', 5 ]]
//nomatter the order, it will be arranged according to the priority stated

//Binary Search Tree
//used to store data that when visualized looks like a tree you would see in nature
console.log('Binary Search Tree')
console.log('class implementation of binary search tree')
class Node { //represents each node in the tree
  constructor(data, left=null, right = null){    //a constructor is a special method for defining the properties and methods of objects
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST { 
  constructor(){
    this.root = null
  }
  add(data){
    const node = this.root;
    if(node === null){
      this.root = new Node(data)
      return
    } else{
      const searchTree = function(node){
        if(data<node.data){
          if(node.left === null){
            node.left = new Node(data)
            return
          } else if(node.left !== null){
            return searchTree(node.left)
          }
        }else if(data>node.data){
          if(node.right === null){
            node.right = new Node(data)
            return
          }else if(node.right !== null){
            return searchTree(node.right)
          }
        }else{
          return null
        }
      }
      return searchTree(node)
    }
  }
  findMin() { //min is the last value on the left side
    let current = this.root
    while(current.left !== null){
      current = current.left
    }
    return current.data
  }
  findMax(){  //max is the last value on the right side
    let current = this.root
    while(current.right !== null){
      current = current.right
    }
    return current.data
  }
  isPresent(data){
     let current = this.root
     while(current){
      if(data === current.data){ //if the data being searched is present in the current node, then return it has been found, true is returned
        return true
      }
      if(data<current.data){ //if data is less than current.data, we go left
        current = current.left
      }else{ //if data is more than current.data, we go right
        current = current.right
      }
     }
     return false  //if data is not present return false
  }
  remove(data){
    const removeNode = function(node, data){
      if(node===null){
        return null
      }
      if (data === node.data){
        //node has no children
        if (node.left === null && node.right === null){
          return null
        }
        //node has no left child
        if (node.left === null){
          return node.right
        }
        //node has no right child
        if (node.right === null){
          return node.left
        }
        //node has two children
        let tempNode = node.right 
        while (tempNode.left !== null){
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      }else if(data<node.data){
        node.left = removeNode(node.left, data)
        return node
      }else{
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
}

//BST implementation example
console.log('bst implementation example')
const bst = new BST()

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3);
bst.add(5);
bst.add(7);

bst.remove(4)
console.log(bst.findMin())
console.log(bst.findMax())
bst.remove(7)
console.log(bst.findMax());

//Binary search tree: Traversal and Height
