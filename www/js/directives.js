angular.module('eedankarya.directives', [])

.directive('isPastEvent', function(){
    return {
        restrict: 'A',
        scope: {
            tanggal: '='
        },
        link: function($scope, el, attrs){
            el.find('.daysLeft').css('display', 'none');

            var new_date = '';
            var months = [
                ['Agustus', 'Aug'],
                ['Oktober', 'Oct'],
                ['November', 'Nov'],
                ['Desember', 'Dec'],
                ['Januari', 'Jan']
            ];

            angular.forEach(months, function(obj, index){
                if($scope.tanggal.indexOf(obj[0]) > -1){
                    new_date = $scope.tanggal.replace(obj[0], obj[1]);
                    return;
                }
            });
            var dateString = new_date.match(/\d+ \w{3} \d{4}/);
            var event_date = new Date(dateString);
            var now = new Date();

            if(event_date < now){
                el.addClass('is-past');
            }

            var delta = event_date-now;
            var daysLeft = Math.ceil(delta/(1000*60*60*24));
            if(daysLeft == 0){
                el.addClass('is-today');
            }
        }
    }
});
