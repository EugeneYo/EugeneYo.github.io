// This update the textContent for the input text box
document.getElementById("myInput").addEventListener("input", function (e) {
  document.getElementById("myInput").textContent = e.target.value;
});

// This printout the result when button is clicked
document.getElementById("myButton").addEventListener("click", function () {
  const input = document.getElementById("myInput").textContent;
  printResult(input.toUpperCase());
});

// This print out the result when "Enter" key is pressed
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var input = document.getElementById("myInput").textContent;
    printResult(input.toUpperCase());
  }
});

function printResult(input) {
  switch (input) {
    case "A":
    case "B":
    case "C":
      document.getElementById("myOutput").textContent = "2";
      break;

    case "D":
    case "E":
    case "F":
      document.getElementById("myOutput").textContent = "3";
      break;

    case "G":
    case "H":
    case "I":
      document.getElementById("myOutput").textContent = "4";
      break;

    case "J":
    case "K":
    case "L":
      document.getElementById("myOutput").textContent = "5";
      break;

    case "M":
    case "N":
    case "O":
      document.getElementById("myOutput").textContent = "6";
      break;

    case "P":
    case "Q":
    case "R":
    case "S":
      document.getElementById("myOutput").textContent = "7";
      break;

    case "T":
    case "U":
    case "V":
      document.getElementById("myOutput").textContent = "8";
      break;

    case "W":
    case "X":
    case "Y":
    case "Z":
      document.getElementById("myOutput").textContent = "9";
      break;

    default:
      document.getElementById("myOutput").textContent = "Not a valid input";
      break;
  }
}
