(function(){
    'use strict';

    var app = angular.module('ngPractice', []);

    /**
     * PasswordController
     * Validates a password against a set of minimum complexity rules
     */
    app.controller('PasswordController', ['$scope', function($scope){
        $scope.checkPassword = function(pass){

            var isLongEnough = function(p){
                return p.length >= 5;
            };

            var isNotSandwhichRelated = function(p){
                return p.toLowerCase().indexOf('sandwhich') === -1;
            };

            var isNotAPalindrome = function(p){
                return p.toLowerCase().split('').reverse().join('') !== p.toLowerCase();
            };

            $scope.valid = isLongEnough(pass) && isNotSandwhichRelated(pass) && isNotAPalindrome(pass);
        };
    }]);

    /**
     * SimpleNumberFilter
     * Takes a collection of numbers and a range and returns a subset within range
     */
    app.filter('simpleNumberFilter', function(){
        return function(items, l, u){
            var results = [];
            angular.forEach(items, function(i){
                if (l <= i && i <= u){
                    results.push(i);
                }
            });
            return results;
        };
    });

    /**
     * requiredFieldLabel
     * Takes an HTML label and appends a red asterisk
     */
    app.directive('requiredFieldLabel', function(){
        return function(){
            return {
                restrict: 'A',
                compile: function(el){
                    element.append('<span class="text-danger">*</span>');
                }
            };
        };
    });

}());