// Exercise 3: Copilot Chat - Code Refactoring
// This file contains old-style JavaScript (ES5) that you'll modernize with Copilot
// DO NOT modify this file until instructed - it's intentionally ES5 for the exercise

function processItems(items) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].active == true) {
      result.push(items[i].name.toUpperCase());
    }
  }
  return result;
}

function findItemById(items, id) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      return items[i];
    }
  }
  return null;
}

function calculateSum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

function filterByProperty(items, property, value) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i][property] == value) {
      result.push(items[i]);
    }
  }
  return result;
}

function mapToProperty(items, property) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    result.push(items[i][property]);
  }
  return result;
}

// Instructions:
// 1. Select a function above
// 2. Press Ctrl+I (Windows/Linux) or Cmd+I (Mac) for inline chat
// 3. Type: "Modernize this to ES6+ with arrow functions and array methods"
// 4. Review and apply the suggested changes
// 5. Repeat for other functions

module.exports = {
  processItems: processItems,
  findItemById: findItemById,
  calculateSum: calculateSum,
  filterByProperty: filterByProperty,
  mapToProperty: mapToProperty,
};
