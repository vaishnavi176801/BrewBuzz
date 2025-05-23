fetch('../cafes.geojson')
  .then(response => response.json())
  .then(data => {
    // Process the data after loading the geojson
    processCafes(data);
  })
  .catch(error => {
    console.error('Error loading geojson:', error);
  });
function processCafes(geojsonData) {
  // Create an array of cafe data with name, address, and website (if available)
  const cafes = geojsonData.features.map(feature => {
    const cafe = feature.properties;
    const address = `${cafe['addr:housenumber']} ${cafe['addr:street']}, ${cafe['addr:city']}, ${cafe['addr:province']}, ${cafe['addr:postcode']}`;
    return {
      name: cafe.name,
      address: address,
      website: cafe.website || "Not available" // Default if website is not available
    };
  });

  console.log(cafes); // This will log the processed cafes data to the console
}
function displayCafes(cafes) {
  const cafeList = document.getElementById('cafeList'); // Assuming you have an HTML element with id 'cafeList'
  cafeList.innerHTML = ""; // Clear the list

  cafes.forEach(cafe => {
    const listItem = document.createElement('li');
    listItem.textContent = `${cafe.name} - ${cafe.address}`;
    cafeList.appendChild(listItem);
  });
}

// Call display function after processing cafes
fetch('/cafes.geojson')
  .then(response => response.json())
  .then(data => {
    const cafes = processCafes(data);
    displayCafes(cafes); // Display the cafe list on the page
  })
  .catch(error => {
    console.error('Error loading geojson:', error);
  });
