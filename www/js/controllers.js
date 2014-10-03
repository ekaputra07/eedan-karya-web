angular.module('eedankarya.controllers', [])

.controller('AboutCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})
