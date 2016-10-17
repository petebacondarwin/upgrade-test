import { Directive, Input, ElementRef, Injector, OnInit } from '@angular/core';
import { downgradeComponent, UpgradeComponent } from './upgrade/aot';
import { AppComponent } from './app.component';

@Directive({
  selector: 'app-heroes'
})
export class HeroesUpgradeComponent extends UpgradeComponent implements OnInit {
  @Input() heroes: string[];

  constructor(elementRef: ElementRef, injector: Injector) {
    debugger;
    super('appHeroes', elementRef, injector);
  }
  ngOnInit() {
    debugger;
  }
}

angular.module('app', [])

  .directive('myApp', downgradeComponent({ component: AppComponent }) as ng.Injectable<ng.IDirectiveFactory>)

  .component('appHeroes', {
    bindings: { heroes: '<' },
    template: '<h3>List of Heroes</h3>\n<div ng-repeat="hero in $ctrl.heroes">{{hero}}</div>'
  });
