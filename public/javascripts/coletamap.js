function initMap() {
    const myLatLng =  { lat:-22.838026,lng:-43.3301904 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.2,
    center: myLatLng
    });
    
    addMarker({lat:-22.8200768,lng:-43.3718387});
    addMarker({lat:-22.8358675,lng:-43.3427046});
    addMarker({lat:-22.8561723,lng:-43.3362421});
    addMarker({lat:-22.8977601,lng:-43.3198072});
    addMarker({lat:-22.838026,lng:-43.3301904});

    function addMarker(coords){
        var marker = new google.maps.Marker({
            position: coords,
            map:map,
            icon:'images/icon.png'
        })
    }}