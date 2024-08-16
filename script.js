function removeScriptureReference() {
  // Wait for the script content to load
  setTimeout(function() {
      // Select the element containing the verse
      var verseContent = document.getElementById('bible-verse-content');
      if (verseContent) {
          // Assuming the verse and reference are within the same element
          var verseText = verseContent.innerHTML;

          // Use regular expressions to remove the Scripture reference
          // Adjust the regex based on the actual structure of the loaded content
          verseText = verseText.replace(/(\d{1,2}:\d{1,2})/g, '').trim();

          // Update the content with the reference removed
          verseContent.innerHTML = verseText;
      }
  }, 1000); // Adjust timeout if necessary
}

// Call the function to remove the Scripture reference
removeScriptureReference();