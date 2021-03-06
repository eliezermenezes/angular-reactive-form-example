import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'angular-reactive-form',
        pathMatch: 'full'
    },
    {
        path: 'angular-reactive-form',
        component: ReactiveFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
