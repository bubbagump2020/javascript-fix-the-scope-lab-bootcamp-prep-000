var animal = 'dog'

function myAnimal(animal) {
  if (animal === `dog`){
    return animal
  }
  
  
}

function yourAnimal(animal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

function funkyFunction() {
 function funky(){
   return "FUNKY!"
 }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
