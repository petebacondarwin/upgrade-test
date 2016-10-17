import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UpgradeModule } from './upgrade/aot';
import { HeroesUpgradeComponent } from './ng1_app';

@NgModule({
  imports:      [ BrowserModule, UpgradeModule ],
  declarations: [ HeroesUpgradeComponent, AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {
  ngDoBootstrap() {}
}