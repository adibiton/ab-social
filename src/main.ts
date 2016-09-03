import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'core-js';
import 'zone.js/dist/zone';
import { AppModule } from './app/app.module';


if ('production' === process.env.ENV) {
    // Production
} else {
    // Development
    Error.stackTraceLimit = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(AppModule);
