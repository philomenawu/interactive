var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbz-_7KBPM6XYRL6qJHcE9b17BNiLEvnNqHB-E5hb8clj0klVMYfo7QfYiP0mf9LG0zNVw/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
         handleData(response);
         console.log(response);
      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
function handleData(response) {
  var sheetDataElement = document.getElementById("sheetData");

  response.forEach(function(item) {
    // Create a new <li> element
    var listItem = document.createElement("li");

    // Iterate over the keys of the object
    Object.keys(item).forEach(function(key) {
      // Create a new <div> element for each key-value pair
      var divKeyValue = document.createElement("div");
      // Set class name as the key
      divKeyValue.className = key;

      // Check if the value is a hyperlink
      if (isHyperlink(item[key])) {
        // If it's a hyperlink, create an <a> element
        var anchor = document.createElement("a");
        anchor.href = item[key];
        anchor.textContent = item[key]; // You may want to use a different text if necessary
        divKeyValue.appendChild(anchor);
      } else {
        // If it's not a hyperlink, set innerHTML as the value
        if (key === 'name' || 'word') { // Check if it's the song name
          divKeyValue.innerHTML = '<span style="font-weight: 300;">' + item[key] + '</span>'; // Apply bold and color styling
        } else {
          divKeyValue.innerHTML = item[key];
        }
      }

      // Append the <div> element for the key-value pair to the <li> item
      listItem.appendChild(divKeyValue);
    });

    // Append the <li> element to the "sheetData" element
    sheetDataElement.insertBefore(listItem, sheetDataElement.firstChild);
  });
}

// Function to check if a value is a hyperlink
function isHyperlink(value) {
  return /^https?:\/\//i.test(value);
}


// Example usage:
getData(AppScriptUrl);


