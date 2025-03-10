// Animal objects that the code will iterate through
const cow = {
    animalName : "Cow",
    animalSound : "Moo"
}

const dog = {
    animalName : "Dog",
    animalSound: "Bark"
}

const goat = {
    animalName : "Goat",
    animalSound : "Bleet"
}

const sheep = {
    animalName : "Sheep",
    animalSound: "Baaaaa"
}

const duck = {
    animalName : "Duck",
    animalSound: "quack"
}

const chicken = {
    animalName : "Chicken",
    animalSound: "cluck"
}

const cat = {
    animalName : "Cat",
    animalSound: "meow"
}

// vaiables for the often repeated parts of the song
const eio = "Ei Ei O";
const oldMcdonald = "Old Mcdonald had a farm";
const on ="And on that farm he had a ";


// array of objects
const animals = [cow, dog, goat, sheep, duck, chicken, cat];



// for of loop to iterate through the array
function song() {
    for (let animal of animals){
    console.log(oldMcdonald);
    console.log(eio);
    console.log(on + " " + animal.animalName);
    console.log(eio);
    console.log("With a " + animal.animalSound + "-" + animal.animalSound +" and a " + animal.animalSound + "-" + animal.animalSound + " there");
    console.log("Here a " + animal.animalSound + ", " + "there a " + animal.animalSound);
    console.log("Everywhere a "+  animal.animalSound + "-" + animal.animalSound);
    console.log(oldMcdonald);
    console.log(eio);
    console.log();
};
};

song();
