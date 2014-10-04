angular.module('eedankarya.controllers', [])

.controller('AboutCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
    Events.all(function(data, error){
        $scope.events = data;
    });
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
    $scope.event = Events.get($stateParams.eventId);
})
