/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: shaddon meyer
      Date:   4-24-2025

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener( keyup, updateCount);

// Function to update the count with each keyup event
function updateCount() {
   
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   commentText = document.getElementById("comment").value;
   charCount = countCharacters(commentsText);
   

   try {
      if  ( charCount > MAX_REVIEW.value) {
         throw "You have exceeded the character count limit";
      }
    }
    catch(err) {
       warningBox.innerHTML = "You have exceeded the character count limit";
      
    }
    finally { 
      warningBox.innerHTML = charCount;
      
    }
}

function keyup() {}










/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 
