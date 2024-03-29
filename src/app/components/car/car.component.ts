import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded=false;
  
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    if(params["brandId"]){
      this.getCarsByBrand(params["brandId"])
    }else if(params["colorId"]){
      this.getCarsByColor(params["colorId"])
    }else{
      this.getCars()
    }
   })
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }
}
