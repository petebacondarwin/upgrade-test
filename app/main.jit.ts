import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule }          from './upgrade/aot';
import { AppModule }              from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['app']);
});
