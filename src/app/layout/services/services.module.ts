import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {ServicesComponent} from './services.component';
import {PageHeaderModule} from './../../shared';
import {StatModule} from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ServicesRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [ServicesComponent]
})
export class ServicesModule {
}
