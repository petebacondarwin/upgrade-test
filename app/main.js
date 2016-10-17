"use strict";
var platform_browser_1 = require('@angular/platform-browser');
var upgrade_1 = require('@angular/upgrade');
var app_module_ngfactory_1 = require('../aot/app/app.module.ngfactory');
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory).then(function (ref) {
    var upgrade = ref.injector.get(upgrade_1.UpgradeModule);
    upgrade.bootstrap(document.body, ['app']);
});
//# sourceMappingURL=main.js.map