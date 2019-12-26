import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vehicle-type',
    loadChildren: () => import('./vehicle-type/vehicle-type.module').then( m => m.VehicleTypePageModule)
  },
  {
    path: 'car-model',
    loadChildren: () => import('./car-model/car-model.module').then( m => m.CarModelPageModule)
  },
  {
    path: 'car-type',
    loadChildren: () => import('./car-type/car-type.module').then( m => m.CarTypePageModule)
  },
  {
    path: 'bike-model',
    loadChildren: () => import('./bike-model/bike-model.module').then( m => m.BikeModelPageModule)
  },
  {
    path: 'bike-type',
    loadChildren: () => import('./bike-type/bike-type.module').then( m => m.BikeTypePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./phone/phone.module').then( m => m.PhonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
