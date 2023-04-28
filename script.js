let myData; //global data object for use later

fetch('https://raw.githubusercontent.com/osmosis-labs/assetlists/main/osmosis-1/osmosis-1.assetlist.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('myData', JSON.stringify(data)); // Save data to localStorage
        console.log('Data saved to localStorage:', data);
  })
  .catch(error => console.error(error));

// Load JSON data from localStorage on page load
window.addEventListener('load', () => {
  myData = JSON.parse(localStorage.getItem('myData')); // Assign parsed JSON data to myData
  console.log('Data loaded from localStorage:', myData);
  // Use myData outside the event listener
console.log('myData:', myData);
console.log(myData.assets[21].base)
});