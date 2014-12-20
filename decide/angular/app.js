var app = angular.module( 'decide', [] );

app.directive( 'yesNoDisplay',function() {
    return {
        restrict: 'E',
        templateUrl: 'decisions/yesno.html',
        controllerAs: 'decideCtrl',
        controller: function() {
            this.decision = Math.random() < 0.5;
        }    
    };
});
