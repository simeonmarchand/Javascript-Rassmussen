// // Creating a literal object for a fictional dog
// let myDog = {
//   name: "Scooby Doo",
//   show: "Scooby Doo, Where Are You!",
//   breed: "Great Dane",
//   image: "https://www.example.com/scooby-doo.jpg",
//   mySound: "Ruh-Roh, Raggy!",
// };

// // Displaying the dog's information
// alert(
//   "My favorite fictional dog is " +
//     myDog.name +
//     " from the show " +
//     myDog.show +
//     "."
// );
// alert(
//   "He is a " +
//     myDog.breed +
//     " breed and his image can be found at " +
//     myDog.image +
//     "."
// );
// alert("When you hear him, he might say: " + myDog.mySound);

// // Constructor for a fictional dog object
// function FictionalDog(name, show, breed, image, mySound, canTalk) {
//   this.name = name;
//   this.show = show;
//   this.breed = breed;
//   this.image = image;
//   this.mySound = mySound;
//   this.canTalk = canTalk;
//   this.myGreeting = function () {
//     alert("Hi! I am " + this.name + " from the show " + this.show + ".");
//     alert(
//       "I am a " +
//         this.breed +
//         " breed and my image can be found at " +
//         this.image +
//         "."
//     );
//     alert("When you hear me, I might say: " + this.mySound);
//     alert("Can I talk? " + this.canTalk);
//   };
// }

// // Creating an object using the constructor
// let myDogConst = new FictionalDog(
//   "Scooby Doo",
//   "Scooby Doo, Where Are You!",
//   "Great Dane",
//   "https://www.example.com/scooby-doo.jpg",
//   "Ruh-Roh, Raggy!",
//   false
// );

// // Calling the object's method
// myDogConst.myGreeting();

// Define the dog object using a constructor function
function Dog(name, breed, canTalk) {
  this.name = name;
  this.breed = breed;
  this.canTalk = canTalk;
  this.myGreeting = function () {
    if (this.canTalk) {
      return `Hi, my name is ${this.name} and I am a ${this.breed}. I can talk!`;
    } else {
      return `Hi, my name is ${this.name} and I am a ${this.breed}. I cannot talk.`;
    }
  };
}

// Create two new dog objects using the constructor function
const scoobyDoo = new Dog("Scooby Doo", "Great Dane", false);
const santaPaws = new Dog("Santa Paws", "Golden Retriever", true);

// Store the dogs in an array
const dogs = [scoobyDoo, santaPaws];

// Display all the properties and values in the objects
for (const dog of dogs) {
  alert(`Name: ${dog.name}`);
  alert(`Breed: ${dog.breed}`);
  alert(`Can talk: ${dog.canTalk}`);
  alert(dog.myGreeting());
  alert("\n");
}

// Prompt the user to select one of the dogs
const selectedDog = prompt("Please select a dog by typing in its name");

// Display the selected dog and its information
let found = false;
for (const dog of dogs) {
  if (dog.name.toLowerCase() === selectedDog.toLowerCase()) {
    found = true;
    document.querySelector("#message").innerHTML = dog.myGreeting();
    break;
  }
}

// Display an error message if the dog doesn't exist
if (!found) {
  document.querySelector(
    "#message"
  ).innerHTML = `Sorry, the dog "${selectedDog}" doesn't exist.`;
}
