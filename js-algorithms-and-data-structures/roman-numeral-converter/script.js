document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("number");
  const convertButton = document.getElementById("convert-btn");
  const outputElement = document.getElementById("output");

  // Add click listener
  convertButton.addEventListener('click', () => {
    console.log(inputElement.value);
    outputElement.innerText = convertNumberToRomanNumeral(inputElement.value);
  });

  /**
   * I  :    1
   * IV :    4
   * V  :    5
   * IX :    9
   * X  :   10
   * XL :   40
   * L  :   50
   * XC :   90
   * C  :  100
   * CD :  400
   * D  :  500
   * CM :  900
   * M  : 1000
   */

  const convertNumberToRomanNumeral = (number) => {
    // Convert to int once
    number = parseInt(number);
    let output = "";
    
    // Error case: no value in #input (check if numer isNaN since the input is type=number)
    if (isNaN(number)) {
      return "Please enter a valid number";
    }
    // Error case: user enters negative number
    else if (number < 0 ) {
      return "Please enter a number greater than or equal to 1";
    }
    // Error case: user enters number greater than 3999
    else if (number > 3999) {
      return "Please enter a number less than or equal to 3999";
    } 
    // Base case
    else if (number === 0) {
      return output;
    }
    // Main use case
    else {
      if (number >= 1000) {
        output = 'M';
        number = number - 1000;        
      }
      else if (number >= 900) {
        output = 'CM';
        number -= 900;
      }
      else if (number >= 500) {
        output = 'D';
        number -= 500;
      }
      else if (number >= 400) {
        output = 'CD';
        number -= 400;
      }
      else if (number >= 100) {
        output = 'C';
        number -= 100;
      }
      else if (number >= 90) {
        output = 'XC';
        number -= 90;
      }
      else if (number >= 50) {
        output = 'L';
        number -= 50;
      }
      else if (number >= 40) {
        output = 'XL';
        number -= 40;
      }
      else if (number >= 10) {
        output = 'X';
        number -= 10;
      }
      else if (number >= 9) {
        output = 'IX';
        number -= 9;
      }
      else if (number >= 5) {
        output = 'V';
        number -= 5;
      }
      else if (number >= 4) {
        output = 'IV';
        number -= 4;
      }
      else if (number >= 1) {
        output = 'I';
        number -= 1;
      }

      // Construct output left-to-right with and recursive call
      return output + convertNumberToRomanNumeral(number);
    }
  }
});