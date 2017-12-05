import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'services' },
            { path: 'services', loadChildren: './services/services.module#ServicesModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
            { path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
