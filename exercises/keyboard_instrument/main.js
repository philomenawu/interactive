// document.body.onkeydown = function(keypress_event){
//   var key = keypress_event.key;
//   var new_element = document.createElement("h1");
//   new_element.innerHTML = key;
//   document.body.appendChild(new_element);
//   if (key == "q") {
//     document.body.style.backgroundColor = "red";
//     document.body.style.backgroundSize = "10%";
//   } 
//   else if (key == "w") {
//     document.body.style.backgroundColor = "orange";
//     document.body.style.backgroundSize = "20%";
//   } 
//   else if (key == "e") {
//     document.body.style.backgroundColor = "yellow";
//     document.body.style.backgroundSize = "30%";
//   } 
//   else if (key == "r") {
//     document.body.style.backgroundColor = "blue";
//   } 
//   else if (key == "t") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "y") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "u") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "i") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "o") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "p") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "a") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "s") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "d") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "f") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "g") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "h") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "j") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "k") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "l") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "z") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "x") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "c") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "v") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "b") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "n") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "m") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == ".") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "!") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == "?") {
//     document.body.style.backgroundColor = "";
//   } 
//   else if (key == ",") {
//     document.body.style.backgroundColor = "";
//   } 
// };

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Colorful Squares</title>
// <style>
//   /* Style for the colored square */
//   .colored-square {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     opacity: 0.3; /* Adjust the opacity as needed */
//   }

//   /* Individual color styles */
//   .red {
//     background-color: red;
//     width: 10%;
//     height: 10%;
//   }

//   .orange {
//     background-color: orange;
//     width: 20%;
//     height: 20%;
//   }

//   .yellow {
//     background-color: yellow;
//     width: 30%;
//     height: 30%;
//   }

//   /* Prevent body from scrolling */
//   body {
//     overflow: hidden;
//   }
// </style>
// </head>
// <body>
// <script>
//   document.body.onkeydown = function(keypress_event) {
//     var key = keypress_event.key;
//     var coloredSquare;

//     // Remove any previously added colored squares
//     var existingColoredSquare = document.querySelector('.colored-square');
//     if (existingColoredSquare) {
//       existingColoredSquare.remove();
//     }

//     // Create a new colored square element
//     coloredSquare = document.createElement("div");
//     coloredSquare.classList.add("colored-square");

//     // Apply the appropriate color class based on the pressed key
//     switch(key.toLowerCase()) {
//       case "q":
//         coloredSquare.classList.add("red");
//         break;
//       case "w":
//         coloredSquare.classList.add("orange");
//         break;
//       case "e":
//         coloredSquare.classList.add("yellow");
//         break;
//       // Add more cases for other keys as needed
//       default:
//         // If the key doesn't have a corresponding color, do nothing
//         return;
//     }

//     // Append the colored square to the body
//     document.body.appendChild(coloredSquare);
//   };
// </script>
// </body>
// </html>


document.body.onkeydown = function(keypress_event) {
  var key = keypress_event.key;
  var coloredSquare;

  // Create a new colored square element
  coloredSquare = document.createElement("div");
  coloredSquare.classList.add("colored-square");

  // Apply the appropriate color class based on the pressed key
  switch(key.toLowerCase()) {
    case "q":
      coloredSquare.classList.add("red");
      break;
    case "w":
      coloredSquare.classList.add("orange");
      break;
    case "e":
      coloredSquare.classList.add("yellow");
      break;
    // Add more cases for other keys as needed
    default:
      // If the key doesn't have a corresponding color, do nothing
      return;
  }

  // Append the colored square to the container
  document.getElementById("colored-squares-container").appendChild(coloredSquare);
};