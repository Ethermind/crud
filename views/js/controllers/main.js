(function(){
	"use strict";
    
    angular
	.module("ethermind")
	.controller("MainController", MainController);
    
    function MainController($scope, Resource){
        var self = this;

        self.obj = getEmptyObject();
        self.get = get;
        self.remove = remove;
        self.save = save;
        self.add = add;
        self.edit = edit;
        self.showForm = false;
        self.load = load;
        self.load();
        
        function load(){
            Resource.query(function(resources) {
                self.resources = resources;
            });
        }

        function get(id){
            Resource.get({ id: id }, function() {
                });
        }
        
        function remove(resource) {
            resource.$delete(function() {
                });
            self.load();
        };

        function save() {
            var resource = resource = new Resource(self.obj);
            
            if(self.obj._id == null){
                resource.$save();
            } else {
                Resource.update(resource);
            }

            self.showForm = false;
            self.load();
        };
        
        function add(){
            self.obj = getEmptyObject();
            self.showForm = true;
        };

        function edit(obj){
            self.obj = obj;
            self.showForm = true;
        };
        
        function getEmptyObject(){
            var obj = {
                    _id: null,
                    title: null,
                    year: null
		          };
            
            return obj;
        }
        
    }

})();