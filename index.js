// MILD
// Create an array called truths and store 3 true facts about yourself

let truths = ["I have Hazel Eyes", "I have every Genration of playstation", "A little life is my favorite book"]


// console log the 1st element (element is not same as index!)

console.log(truths[0])

// change the value of the last element

truths[2] = "I Buy more books than i read"

// console log the last element to check that it's changed

console.log(truths[2])
// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself

let lies = ["I'm 6 feet", "I play sports", "2K is my favorite game"]


// delete a value from the lies array

lies.pop()


// console log the second list to confirm the value is gone

console.log(lies)
// add a new lie to the lies array

lies.push("I have Black eyes")


// SPICY
// pick the truths or lies array and console log the 1st element

console.log(lies[0])

// prompt the user to guess if it was true or false


let boolean = prompt("is this true or false")


// stretch: how could you check they are right or wrong?

if(boolean == "true"){
  console.log("You are wrong")
}
else{
  console.log("You are right")
}

for(i=0 ;i =! 2;){


  console.log(lies[0 + i])
  let boolean1 = prompt("is this true or false")
  console.log(boolean1)
  
}
