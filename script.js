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
});

const ibcForm = document.querySelector('.ibc-info');
const ibcInput = document.querySelector('.ibc-input');
const currentDenom = document.querySelector('.current-denom');
const currentToken = document.querySelector('.current-token');
  
  // Handle form submission
  ibcForm.addEventListener('submit', event => {
    //prevent reload on form submission
    event.preventDefault();
    // Get the input value
    const inputValue = ibcInput.value.trim();
    // Search for matching data in myData
    let searchData = null;
    for (let i = 0; i < myData.assets.length; i++) {
      if (myData.assets[i].base.includes(inputValue)) {
        searchData = myData.assets[i];
        break;
      }
    }
  
    // Display search results
    if (searchData) {
      currentDenom.textContent = searchData.base;
      currentToken.textContent = searchData.name;
    } else {
      currentDenom.textContent = 'No Information Available';
      currentToken.textContent = 'No Information Available';
    }
  });