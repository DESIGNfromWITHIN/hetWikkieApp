angular.module('wikkie.services', [])

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