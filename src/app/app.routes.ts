import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';

export const routes: Routes = [
    {path:"",pathMatch:"full",component:CarComponent},
    {path:"cars",component:CarComponent},
    {path:"cars/brand/:brandId",component:CarComponent},
    {path:"cars/color/:colorId",component:CarComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule { }