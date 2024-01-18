import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Brand } from '../models/brand';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarDetails(carId: number) {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'https://localhost:44315/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getcarsbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  

}
