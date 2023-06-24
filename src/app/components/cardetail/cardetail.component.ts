import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetail[] =[];
  carImagePaths:string[]=[];
  dataLoaded = false;
  imageUrl:string="https://localhost:44355/Uploads/images/"

  currentCarDetail:CarDetail;
  baseUrl:string="https://localhost:44308/Uploads/Images/";

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute,private router:Router,){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarDetailCarId(params["carId"])
      }else{
        this.getCarDetails()
      }
    })
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{this.carDetails = response.data,this.dataLoaded = true;})
  }
  setCurrentCarDetail(carDetail:CarDetail){
    this.currentCarDetail = carDetail
  }
  getCurrentCarDetailClass(carDetail:CarDetail){
    if (carDetail==this.currentCarDetail){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getCarDetailCarId(carId:number){
    this.carDetailService.getCarDetailByCarId(carId).subscribe(response=>{this.carDetails=response.data})
  }
}