var map = L.mapbox.map('map', 'examples.map-d40qac29')
      .setView([-6, 112], 4);

var featureGroup = L.featureGroup().addTo(map);

var circle_options = {
      color: '#fff',      // Stroke color
      opacity: 1,         // Stroke opacity
      weight: 10,         // Stroke weight
      fillColor: '#000',  // Fill color
      fillOpacity: 0.6    // Fill opacity
};

var polyline_options = {
      color: '#000'
};

var drawControl = new L.Control.Draw({
    edit: {
      featureGroup: featureGroup
    }
}).addTo(map);

map.on('draw:created', function(e) {
      featureGroup.addLayer(e.layer);
});