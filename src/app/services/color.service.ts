import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ColorResponseModel } from '../models/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44308/api/colorss/getall";

  constructor(private httpClient:HttpClient) { }

  getColor(): Observable<ColorResponseModel>{
  return this.httpClient.get<ColorResponseModel>(this.apiUrl)
    
  }
}
