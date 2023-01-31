// Creating a literal object for a fictional dog
let myDog = {
  name: "Scooby Doo",
  show: "Scooby Doo, Where Are You!",
  breed: "Great Dane",
  image: "https://www.example.com/scooby-doo.jpg",
  mySound: "Ruh-Roh, Raggy!",
};

// Displaying the dog's information
alert(
  "My favorite fictional dog is " +
    myDog.name +
    " from the show " +
    myDog.show +
    "."
);
alert(
  "He is a " +
    myDog.breed +
    " breed and his image can be found at " +
    myDog.image +
    "."
);
alert("When you hear him, he might say: " + myDog.mySound);

// Constructor for a fictional dog object
function FictionalDog(name, show, breed, image, mySound, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.image = image;
  this.mySound = mySound;
  this.canTalk = canTalk;
  this.myGreeting = function () {
    alert("Hi! I am " + this.name + " from the show " + this.show + ".");
    alert(
      "I am a " +
        this.breed +
        " breed and my image can be found at " +
        this.image +
        "."
    );
    alert("When you hear me, I might say: " + this.mySound);
    alert("Can I talk? " + this.canTalk);
  };
}

// Creating an object using the constructor
let myDogConst = new FictionalDog(
  "Scooby Doo",
  "Scooby Doo, Where Are You!",
  "Great Dane",
  "https://www.example.com/scooby-doo.jpg",
  "Ruh-Roh, Raggy!",
  false
);

// Calling the object's method
myDogConst.myGreeting();
