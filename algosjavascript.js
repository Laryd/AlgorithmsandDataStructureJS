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
      collection.splice(index, 1); //remove one element at the index of index
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
console.log('queue data structure')
//first in first out. An analogy of this is waiting in a queue in a bank.
//It basically is first come first serve
//Another example is a print queue, documents sent to be printed will print according to the one
//that arrived first.
//just like stack it can be implemented using an array
//basically implements push to put element at the end of array, and and shift
//instead of pop to remove the first element of an array instead of the last
function Queue(){
  const collection = []
  this.print = function(){
    console.log(collection)

  }
  this.enqueue = function(element){
    collection.push(element)
  }
  this.dequeue = function(element){
     return collection.shift()
  }
  this.front = function(){
    return collection[0]
  }
  this.size = function() {
    return collection.length
  }
  this.isEmpty = function(){
    return (collection.length === 0)
  }
}
console.log('queue outputs')
const myQueue = new Queue()
myQueue.enqueue('a')
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue("d");
myQueue.print() //['a', 'b', 'c', 'd' ]
myQueue.dequeue('a')
myQueue.print() //['b', 'c', 'd' ]
console.log(myQueue.front()) //['b']
console.log(myQueue.size()) //3
console.log(myQueue.isEmpty()) //false