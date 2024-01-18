import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car';
import { CarDetail } from '../../models/car-detail';
import { CarDetailService } from '../../services/car-detail.service';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{


 cardetails:CarDetail[]=[];
 baseUrl="https://localhost:44329/uploads/images/";
 itemLoaded :boolean;
 rentalMessage: string = '';
 rentDate : Date | null = null;
 returnDate : Date | null = null;
 rentalAddForm : FormGroup;


 constructor(
  private cardetailService:CarDetailService,
  private carService:CarService,
  private activatedRoute:ActivatedRoute,
  private formBuilder:FormBuilder
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.cardetails = response.data
    })
  }
}