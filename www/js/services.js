angular.module('eedankarya.services', [])

.factory('Events', ['$http', 'AppType', function($http, AppType) {
  var local_json = '/events.json';
  var remote_json = 'https://raw.githubusercontent.com/ekaputra07/eedan-karya/master/www/events.json';

  var events_version = 1;
  var events = null;

  return {
    all: function(callback) {
      if(events){
          callback(events, null);
      }else{
          if(AppType == 'browser'){
            url = local_json;
          }else{
            url = remote_json;
          }
          $http.get(url)
          .success(function(data){
              events_version = data.version;
              events = data.events;
              callback(events, null);
          });
      }
    },
    get: function(eventId) {
      var event = null;
      angular.forEach(events, function(obj, index){
        if(obj.id == eventId){
          event = obj;
          return;
        }
      });
      return event;
    },
    getVersion: function(){
      return events_version;
    }
  }
}]);
