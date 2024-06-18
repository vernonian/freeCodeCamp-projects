document.addEventListener("DOMContentLoaded", () => {
  // Define and initialize variables
  const textInput = document.getElementById("text-input");
  const checkButton = document.getElementById("check-btn");
  const resultsBox = document.querySelector(".results-box");
  const resultEl = document.getElementById("result");
  const originalStringEl = document.getElementById("original");
  const reversedStringEl = document.getElementById("reversed");

  let resultString; // The string to assign to our resultEl
  let originalInput; // The string to store the original input value
  let cleanInput; // The string after we mutate it

  // Assume isPalindrome is true, so it get's changed if its not
  let isPalindrome = true; // Boolean

  // onClick function
  checkButton.addEventListener("click", handleCheckIfTextIsPalindrome);

  /**
   * Hanlder function to run our script
   */
  function handleCheckIfTextIsPalindrome() {
    // check if input is empty
    if (!textInput.value || textInput.value === "")
      alert("Please input a value");
    else {
      // Store the original input value and check if its a palindrome
      originalInput = textInput.value;
      isPalindrome = checkIfTextIsPalindrome(originalInput);
      
      // Update DOM with results
      updateResults();
    }
  }

  /**
   * Changes the value of isPalindrome based on comparing a normal and reversed string's index
   */
  function checkIfTextIsPalindrome(text) {
    // Sanitize the text
    cleanInput = sanitizeString(text);

    // If text has more than 1 character, 
    // then it's a palindrome by default
    // so we can skip checking for palindrome
    if (cleanInput.length === 1) {
      return true;
    }
    else {
      // Convert string into array to compare
      let normal = cleanInput.split("");

      // Get a reversed array
      let reversed = cleanInput.split("").reverse();

      // Reset isPalindrome to true because we are checking iff its false
      // isPalindrome = true;

      // Check if each character matches its reversed index
      for (let i=0; i < normal.length; i++) {
        // If even only index doesn't match, then it's not a palindrome
        if (normal[i] !== reversed [i]) {
          return false; // it's not a palindrome
        }
      }
      return true; // it's a palindrome
    }
  }

  /**
   * Updates the DOM based on the value of isPalindrome
   */
  function updateResults() {
    let a;
    if (isPalindrome) a = " is a palindrome."
    else a = " is not a palindrome."

    // Update result text
    resultEl.textContent = originalInput + a;

    // Update the original / reverse paragraphs text (just to visualize differences)
    originalStringEl.textContent = cleanInput.split("").join(" ");
    reversedStringEl.textContent = cleanInput.split("").reverse().join(" ");
  }

  /**
   * Return a sanitized version of a string paramter
   * Result should be all lowercase and only alphanumeric characters
  */
  function sanitizeString(a) {
    // Remove unwanted characters with regex
    a = a.replace(/[^0-9a-z]/gi,'');
    // Make string lowercase
    a = a.toLowerCase();

    return a;
  }

  /* TESTING
  testIfPalindrome("five|\_/|four");
  testIfPalindrome("1 eye for of 1 eye.");
  testIfPalindrome("never odd or even");

  function testIfPalindrome(text) {
    console.log(`Test case: "${text}" is palindome: ${checkIfTextIsPalindrome(text)}`);
  }
    */

});