import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';

import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  carDetails:CarDetail[] = [];
  dataLoaded = false;
  baseUrl:string="https://localhost:44308/Uploads/";
  filterText="";

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute
    ,private toastrService:ToastrService,private cartService:CartService, private carDetailService:CarDetailService){}
 
  ngOnInit(): void{
    
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })

  }

  // getCars()
  // { this.carDetailService.getCarDetails().subscribe(response=>{this.carDetails = response.data,this.dataLoaded = true;})
  // }

  getCars(){ 
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  


  getCarsByBrand(brandId:number){ 
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    }) 
  }
  getCarsByColor(colorId:number){ 
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    }) 
  }
  addToCart(car:Car){
    if (car.carId ===1) {
      this.toastrService.error("satılık değildir!", car.carName +" adamdır")   
    }else{
    this.toastrService.success("Sepete eklendi",car.carName)
    this.cartService.addToCart(car);
  }
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
 
  
  


  
}
  





