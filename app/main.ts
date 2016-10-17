import { platformBrowser }    from '@angular/platform-browser';
import { UpgradeModule } from './upgrade/aot';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then((ref) => {
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['app']);
});
