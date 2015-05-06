module.exports = function(grunt){
    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'app.js',
                options: {
                    specs: 'app-specs.js',
                    vendor: [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jasmine']);
};