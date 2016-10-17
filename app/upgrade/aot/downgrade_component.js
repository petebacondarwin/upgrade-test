import { ComponentFactoryResolver } from '@angular/core';
import { INJECTOR_KEY, $INJECTOR, $PARSE } from './constants';
import { DowngradeComponentAdapter } from './downgrade_component_adapter';
var downgradeCount = 0;
export function downgradeComponent(info) {
    var idPrefix = "NG2_UPGRADE_" + downgradeCount++ + "_";
    var idCount = 0;
    var directiveFactory = function ($injector, $parse) {
        return {
            restrict: 'E',
            require: '?^' + INJECTOR_KEY,
            link: function (scope, element, attrs, parentInjector, transclude) {
                if (parentInjector === null) {
                    parentInjector = $injector.get(INJECTOR_KEY);
                }
                var componentFactoryResolver = parentInjector.get(ComponentFactoryResolver);
                var componentFactory = componentFactoryResolver.resolveComponentFactory(info.component);
                if (!componentFactory) {
                    throw new Error('Expecting ComponentFactory for: ' + info.component);
                }
                var facade = new DowngradeComponentAdapter(idPrefix + (idCount++), info, element, attrs, scope, parentInjector, $parse, componentFactory);
                facade.setupInputs();
                facade.createComponent();
                facade.projectContent();
                facade.setupOutputs();
                facade.registerCleanup();
            }
        };
    };
    directiveFactory.$inject = [$INJECTOR, $PARSE];
    return directiveFactory;
}
//# sourceMappingURL=downgrade_component.js.map