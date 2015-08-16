angular.module('wikkie.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.factory('dierService', function($http) {
  var url="http://hetwikkie.nl/dieren.json";
  var dierenData = function(){
    return $http.get(url);
  }
  return {
    getData: dierenData
  }
})

.factory('dierDetailService', function($http) {
  var dieren = [
    {
        "title": "Querney", 
        "id": "0",
        "diersoort": "Schaap",
        "description": "Dit is Querney, één van onze gecastreerde rammen. Je herkent hem aan zijn gevlekte kop!"
    },
    {
        "title":"Suske", 
        "id": "1",
        "diersoort": "Schaap",
        "description": "Dit is Suske, één van onze gecastreerde rammen. Je herkent hem aan zijn gevlekte kop!"
    }
  ];
  return {
    all: function() {
      return dieren;
    },
    get: function(dierId) {
      return dieren[dierId];
    }
  }
})

.controller('dierenCtrl', function($scope, dierService) {
  dierService.getData()
  .success(function(data){
    $scope.dieren = data;
  })
  .error(function(){});
})

.controller('dierCtrl', function($scope, $stateParams, dierDetailService) {
  $scope.dier = dierDetailService.get($stateParams.dierId);
});