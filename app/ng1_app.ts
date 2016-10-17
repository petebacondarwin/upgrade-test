import { Directive, Input, ElementRef, Injector } from '@angular/core';
import { downgradeComponent, UpgradeComponent } from './upgrade/aot';
import { AppComponent } from './app.component';

@Directive({
  selector: 'app-heroes'
})
export class HeroesUpgradeComponent extends UpgradeComponent {
  @Input() heroes: string[];

  constructor(elementRef: ElementRef, injector: Injector) {
    super('appHeroes', elementRef, injector);
  }
}

angular.module('app', [])

  .directive('my-app', downgradeComponent({ component: AppComponent }) as ng.Injectable<ng.IDirectiveFactory>)

  .component('appHeroes', {
    bindings: { heroes: '<' },
    template: '<h3>List of Heroes</h3>\n<div ng-repeat="hero in $ctrl.heroes">{{hero}}</div>'
  });
