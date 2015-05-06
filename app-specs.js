describe('ngPractice', function(){

    beforeEach(module('ngPractice'));

    it('should exist', function(){
        expect(true).toBe(true);
    });

    describe('NewPasswordController', function(){
        var $scope;

        beforeEach(inject(function($rootScope, $controller){
            $scope = $rootScope.$new();
            $controller('PasswordController', { $scope: $scope });
        }));

        it('should approve of a good, long password', function(){
            var testPass = 'kjsdf&*DFsksjfkdFDjkjsd';
            $scope.checkPassword(testPass);
            expect($scope.valid).toBe(true);
        });

        it('should not approve of a short password', function(){
            $scope.checkPassword('woop');
            expect($scope.valid).toBe(false);
        });

        it('should not approve of a password with the word \'sandwhich\' in it', function(){
            $scope.checkPassword('hotSandwhich');
            expect($scope.valid).toBe(false);
        });

        it('should not approve of a palindrome', function(){
            $scope.checkPassword('racecar');
            expect($scope.valid).toBe(false);
        });
    });

    describe('simpleNumberFilter', function(){
        var simpleNumberFilter;
        
        beforeEach(inject(function($filter){
            simpleNumberFilter = $filter('simpleNumberFilter');
        }));

        it('should, you know, do what it\'s supposed to do', function(){
            var testRange = [1, 2, 3, 4, 5],
                lower = 2,
                upper = 4,
                result = simpleNumberFilter(testRange, lower, upper);
            expect(result).toEqual([2, 3, 4]);
        });
    });

    // describe('requiredFieldLabel', function(){
    //     var $compile, $rootScope;

    //     beforeEach(inject(function(_$compile_, _$rootScope_){
    //         $compile = _$compile_;
    //         $rootScope = _$rootScope_;
    //     }));

    //     it('should append an asterisk to a label', function(){
    //         // Create a test HTML element and queue it to be compiled
    //         var testEl = '<label required-field-label> </label>',
    //             result = $compile(testEl)($rootScope);

    //         // fire all watches so all angular tags are evaluated
    //         $rootScope.$digest();

    //         // Verify the compiled HTML
    //         //expect(result.html()).toEqual('<label required-field-label> </label><span class="text-danger">*</span>');

    //     });
    // });

});