app.controller("HeatCtrl",["$scope","$location",function($scope,$location){
    var var_location = new google.maps.LatLng(14.8333, 120.2833);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:"Center"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),var_mapoptions);
 
    var_marker.setMap(var_map); 
    
    heatmap = new HeatmapOverlay(var_map, 
              {
              // radius should be small ONLY if scaleRadius is true (or small radius is intended)
              "radius": .007,
              "maxOpacity": 1, 
              // scales the radius based on map zoom
              "scaleRadius": true, 
              // if set to false the heatmap uses the global maximum for colorization
              // if activated: uses the data maximum within the current map boundaries 
              //   (there will always be a red spot with useLocalExtremas true)
              "useLocalExtrema": true,
              // which field name in your data represents the latitude - default "lat"
              latField: 'lat',
              // which field name in your data represents the longitude - default "lng"
              lngField: 'lng',
              // which field name in your data represents the data value - default "value"
              valueField: 'count'
              }
            );

            var testData = {
              max: 16,
              data: [{lat: 14.8333, lng:120.2833, count: 16}, {lat: 14.8541, lng:120.3132, count: 10}, {lat: 14.8676, lng:120.2675, count: 5}  ]
            };

            heatmap.setData(testData);
}]);
