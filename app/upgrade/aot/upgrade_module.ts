import * as angular from '../angular_js';
import { Provider, NgModule, Injector, NgZone } from '@angular/core';
import { UPGRADE_MODULE_NAME, INJECTOR_KEY, $INJECTOR } from './constants';
import { controllerKey } from '../util';
import { setTempInjectorRef, compileFactory, injectorFactory, parseFactory, rootScopeFactory } from './angular1_providers';

/**
 * The Ng1Module contains providers for the Ng1Adapter and all the core Angular 1 services;
 * and also holds the `bootstrapNg1()` method fo bootstrapping an upgraded Angular 1 app.
 */
@NgModule({
  providers: [
    { provide: '$injector', useFactory: injectorFactory },
    { provide: '$rootScope', useFactory: rootScopeFactory, deps: ['$injector']},
    { provide: '$compile', useFactory: compileFactory, deps: ['$injector']},
    { provide: '$parse', useFactory: parseFactory, deps: ['$injector']}
  ]
})
export class UpgradeModule {

  public $injector: angular.IInjectorService;

  constructor(public injector: Injector, public ngZone: NgZone) {}

  /**
   * Bootstrap an Angular 1 application from this NgModule
   * @param element the element on which to bootstrap the Angular 1 application
   * @param [modules] the Angular 1 modules to bootstrap for this application
   * @param [config] optional extra Angular 1 bootstrap configuration
   */
  bootstrap(element: Element,
            modules: string[] = [],
            config?: angular.IAngularBootstrapConfig)
  {
    // Create an ng1 module to bootstrap
    const upgradeModule = angular.module(UPGRADE_MODULE_NAME, modules)

      .value(INJECTOR_KEY, this.injector)

      .run([$INJECTOR, ($injector: angular.IInjectorService) => {
        this.$injector = $injector;

        // Initialize the ng1 $injector provider
        setTempInjectorRef($injector);
        this.injector.get($INJECTOR);

        // Put the injector on the DOM, so that it can be "required"
        angular.element(element).data(
                          controllerKey(INJECTOR_KEY), this.injector);

        // Wire up the ng1 rootScope to run a digest cycle whenever the zone settles
        var $rootScope = $injector.get('$rootScope');
        this.ngZone.onMicrotaskEmpty.subscribe(() => this.ngZone.runOutsideAngular(() => $rootScope.$evalAsync()));
      }]);

    // Bootstrap the angular 1 application inside our zone
    this.ngZone.run(() => {
      angular.bootstrap(element, [upgradeModule.name], config);
    });
  }
}

