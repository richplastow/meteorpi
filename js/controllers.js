var featurecatApp = angular.module('featurecatApp', []);

featurecatApp.controller('FeatureListCtrl', function ($scope) {
  $scope.heading = 'MeteorPi Features';
  $scope.features = [
    {'name': 'Meteor',
     'snippet': 'Meteor running smoothly on Raspberry Pi.'},
    {'name': 'NodeJS',
     'snippet': 'Serverside JavaScript running on Google’s V8 engine.'},
    {'name': 'Geany',
     'snippet': 'A neat free IDE which runs on ARM chips.'}
  ];
});