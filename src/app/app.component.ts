import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { BrandComponent } from "./components/brand/brand.component";
import { CarComponent } from "./components/car/car.component";
import { ColorComponent } from "./components/color/color.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { RentalComponent } from "./components/rental/rental.component";
import { CarService } from './services/car.service';
import { BrandService } from './services/brand.service';
import { RouterModule } from '@angular/router';
import { ColorService } from './services/color.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [CarService,BrandService,ColorService],
    imports: [CommonModule, RouterOutlet, NaviComponent, BrandComponent, CarComponent, ColorComponent, CustomerComponent, RentalComponent,HttpClientModule,RouterModule]
})
export class AppComponent {
  title = 'carrental';
}
