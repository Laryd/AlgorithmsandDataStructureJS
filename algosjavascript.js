//stack
//analogy is stacking books on top of each other
//methods used
// push - placing items on stack
// pop - removing from stack
// peek - displaying top element on stack
// length - show length of stack

//application example
//Test is a word is a palindrome

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
const Stack = function(){
    this.count = 0
    this.storage = {}

    //adds value to the end of stack
    this.push = function(value){
        this.storage[this.count] = value
        this.count++
    }
    //removes and returns value at the end of stack
    this.pop = function(){
        if(this.count === 0){
            return undefined
        }
        this.count--;
        const result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }
    //the size of the stack
    this.size = function(){
        return this.count
    }

    //peek the top value 
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

//application of our stack now
const myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.peek)  //item on top is 2
console.log(myStack.pop)  //item on top is removed and it is 2 which is then returned
console.log(myStack.peek)  //item on top is now 1 now that 2 was popped off


//"this" is a keyword in JavaScript that refers to the current object that the code is being executed in.
// It can be used to access properties and methods of the current object, 
// as well as to set the value of the "this" keyword within a given scope.
//Here's an example to help illustrate the concept:

const person = {
  name: "John",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: "Hello, my name is John"
// In this example, the "this" keyword is being used to access the "name" property of the "person" object. 
// The value of "this" within the greet method is set to refer to the "person" object, 
// so when we call person.greet(), the output is "Hello, my name is John"

//Sets

function mySet(){
  // the const collection will hold the set
  const collection = []
  this.has = function(element){
    //this method will check for the presence of an element and return true or false
    return (collection.indexOf(element) !== -1)
  }
  //this method will return all the elements in the set
  this.values = function(){
     return collection
  }
  //this method will add an element to the set
  this.add = function(element){
    if(!this.has(element)){  //does the collection have the element?
      collection.push(element)
      return true
    }
    return false
  }
  //this method will remove an element from a set
  this.remove = function(element){
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index,1) //remove one element at the index of index
      return true
    }
    return false
  }
  //this method will return the size of the collection
  this.size = function(){
    return collection.length
  };
  //this method will return the union of two sets
  this.union = function(otherSet){
    const unionSet = new Set()
    const firstSet = this.values()
    const secondSet = otherSet.values()
    firstSet.forEach(function(e){
      unionSet.add(e)
    })
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet
  }
  //this will return the intersection of two sets as a new set
  this.intersection = function(otherSet){
    
  }
}