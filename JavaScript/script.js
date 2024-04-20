function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 } // Coordenadas padrão
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Adicionar marcador
    var marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        draggable: true
    });
}
