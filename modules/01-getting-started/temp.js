// Exercise 3: Copilot Chat - Code Refactoring
// This file contains old-style JavaScript that you'll modernize with Copilot

function processItems(items) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].active == true) {
      result.push(items[i].name.toUpperCase());
    }
  }
  return result;
}

// Instructions:
// 1. Select the entire function above
// 2. Press Ctrl+I (Windows/Linux) or Cmd+I (Mac) for inline chat
// 3. Type: "Modernize this to ES6+ with arrow functions and array methods"
// 4. Review and apply the suggested changes
