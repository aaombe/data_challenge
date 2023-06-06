function initMap() {
    // Create a map centered at a specific location
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat:43.0453705208444,lng:-76.1449208514871},
      zoom: 12
    });
}
  
window.initMap = initMap;