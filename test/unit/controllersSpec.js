describe('FeatureListCtrl', function(){

beforeEach(module('featurecatApp'));

it('should create "features" model with 3 features', inject(function($controller) {
  var scope = {},
      ctrl = $controller('FeatureListCtrl', {$scope:scope});

  expect(scope.features.length).toBe(3);
  expect(scope.heading).toBe('MeteorPi Features');
}));

});