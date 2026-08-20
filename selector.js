// Selecting by Class Name
 const descriptions = document.getElementsByClassName("description");
  console.log("Elements with class 'description':", descriptions); 
const allParagraphs = document.getElementsByTagName("p"); console.log("All <p> elements:", allParagraphs); 
   // Selecting by Name 4  
const buttonByName = document.getElementsByName("myButton");
 console.log("Button with name 'myButton':", buttonByName); 
 // Using querySelector (selects first match)
  const firstParagraph = document.querySelector(".description");
 console.log("First element with class 'description':", firstParagraph);
  // Using querySelectorAll (selects all matches) 
const allDescriptions = document.querySelectorAll(".description"); 
console.log("All elements with class 'description':", allDescriptions); 