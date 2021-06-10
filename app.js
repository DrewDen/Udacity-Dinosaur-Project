
    // Create Dino Constructor
  function Dino(species, weight, height, diet, where, when, fact){
    return{
      species,
      weight,
      height,
      diet,
      where,
      when,
      fact

    };
  }

  let dinos = Dino('trex', 452, 122, 'killer', 'america', 'before commimet', 'The trex was a stone cold killer');
  console.log(dinos);

    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic


// function rawDinoData() {
//   const dinos = [
//       {
//           "species": "Triceratops",
//           "weight": 13000,
//           "height": 114,
//           "diet": "herbivore",
//           "where": "North America",
//           "when": "Late Cretaceous",
//           "fact": "First discovered in 1889 by Othniel Charles Marsh"
//       },
//       {
//           "species": "Tyrannosaurus Rex",
//           "weight": 11905,
//           "height": 144,
//           "diet": "carnivore",
//           "where": "North America",
//           "when": "Late Cretaceous",
//           "fact": "The largest known skull measures in at 5 feet long."
//       },
//       {
//           "species": "Anklyosaurus",
//           "weight": 10500,
//           "height": 55,
//           "diet": "herbivore",
//           "where": "North America",
//           "when": "Late Cretaceous",
//           "fact": "Anklyosaurus survived for approximately 135 million years."
//       },
//       {
//           "species": "Brachiosaurus",
//           "weight": 70000,
//           "height": "372",
//           "diet": "herbivore",
//           "where": "North America",
//           "when": "Late Jurassic",
//           "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
//       },
//       {
//           "species": "Stegosaurus",
//           "weight": 11600,
//           "height": 79,
//           "diet": "herbivore",
//           "where": "North America, Europe, Asia",
//           "when": "Late Jurassic to Early Cretaceous",
//           "fact": "The Stegosaurus had between 17 and 22 seperate plates and flat spines."
//       },
//       {
//           "species": "Elasmosaurus",
//           "weight": 16000,
//           "height": 59,
//           "diet": "carnivore",
//           "where": "North America",
//           "when": "Late Cretaceous",
//           "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
//       },
//       {
//           "species": "Pteranodon",
//           "weight": 44,
//           "height": 20,
//           "diet": "carnivore",
//           "where": "North America",
//           "when": "Late Cretaceous",
//           "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
//       },
//       {
//           "species": "Pigeon",
//           "weight": 0.5,
//           "height": 9,
//           "diet": "herbivore",
//           "where": "Worldwide",
//           "when": "Holocene",
//           "fact": "All birds are living dinosaurs."
//       }
//   ];

//   return dinos;
// }





  
// fetch("dino.json")
//   .then(function(resp){
//     return resp.json();

//   })
//    .then(function(data){
//      console.log(data);
//    })
