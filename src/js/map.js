// Initialize and add the map
function initMap() {
    // The location of Uluru
    51.46625197557461, 7.2452609708582605
    const uluru = { lat: 51.46625, lng: 7.24526 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 100,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;