angular.module('app', [])
    .component('app-heroes', {
    bindings: {
        heroes: '<'
    },
    template: '<h3>List of Heroes</h3>\n<div ng-repeat="hero in heroes">{{hero}}</div>'
});
//# sourceMappingURL=ng1_heroes.js.map