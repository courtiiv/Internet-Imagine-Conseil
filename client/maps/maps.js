if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ key: 'AIzaSyAxumoRyMwW6gVqPCY5heoR8DPdTAVyCiA'});
  });

  Template.email.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(45.19111086335569, 5.717300176620483),
          zoom: 16
        };
      }
    }
  });

  Template.email.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });
}