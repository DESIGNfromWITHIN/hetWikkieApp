angular.module('wikkie.services', [])

.factory('dierService', function($http) {
  var url="http://hetwikkie.nl/dieren.json";
  var dierenData = [];

  $http.get(url)
    .success(function(data){
      console.log(data)
      dierenData = data;
    });
    
  function all(){
    return dierenData;
  }

  function get(id){
    var found;

    dierenData.forEach(function(dier) {
      console.log(dier, id)
      if (dier.id == id)  
        found = dier
    });
    
    return found;
  }

  return {
    all: all,
    get: get
  }
})