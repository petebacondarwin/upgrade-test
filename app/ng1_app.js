"use strict";
var upgrade_1 = require('@angular/upgrade');
var app_component_1 = require('./app.component');
angular.module('app', [])
    .directive('my-app', upgrade_1.downgradeComponent({ component: app_component_1.AppComponent }))
    .component('app-heroes', {
    bindings: { heroes: '<' },
    template: '<h3>List of Heroes</h3>\n<div ng-repeat="hero in $ctrl.heroes">{{hero}}</div>'
});
//# sourceMappingURL=ng1_app.js.map