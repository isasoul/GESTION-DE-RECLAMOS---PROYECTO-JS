const argCoords = { lat: -34.0, lng: -64.0 };
const mapDiv = document.getElementById("map");
const input = document.getElementById("place_input")
let map;
let marker;
let autocomplete;

function initMap() {
  map = new google.maps.Map(mapDiv, {
    center: argCoords,
    zoom: 4,
  });
    marker = new google.maps.Marker({
    position: argCoords,
    map: map,
})
    initAutocomplete();

}
window.initMap = initMap; 

function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function(){
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
    })
    
}
