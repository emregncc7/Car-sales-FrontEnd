import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44308/api/";

  constructor(private httpClient:HttpClient) { }
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
    
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
      
  }
  
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
      return this.httpClient.get<ListResponseModel<Car>>(newPath)      
  } 

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  getCarById(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
      
  }

  getCarsDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
}
