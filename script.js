// Get the elements from the HTML
var familyMemberInput = document.getElementById("familyMember");
var pluralNounInput = document.getElementById("pluralNoun");
var actionInput = document.getElementById("action");
var madLibButton = document.getElementById("madLibButton");
var resultOutput = document.getElementById("result");

// Add an event listener to the "Generate Mad Lib" button
madLibButton.addEventListener("click", function() {
  // Get the user's input values
  var familyMember = familyMemberInput.value;
  var pluralNoun = pluralNounInput.value;
  var action = actionInput.value;

  // Generate the Mad Lib story
  var story = "My " + familyMember + " loves to eat " + pluralNoun + " and then " + action + ".";

  // Display the result in the result section
  resultOutput.innerHTML = story;
});
