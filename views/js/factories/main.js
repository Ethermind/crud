(function(){
	"use strict";
    
    angular
    .module('ethermind')
    .factory('Resource', function($resource) {
        return $resource('/resource/:id', { id: '@_id' }, {
            update: { method: 'PUT' }
        }, { stripTrailingSlashes: false })
    });
    
})();