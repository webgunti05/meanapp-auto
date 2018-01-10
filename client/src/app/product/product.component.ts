import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/data.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private dropOpen : boolean;
  filterList : Array<any>;
  ProductList : Array<any>;
  private carsList : Array<any>;
  private serviceList : Array<any>;
  private timings : Array<any>;
  User : any;
  private open_bookapoint : boolean;
  private searchBrands : Array<any>;
  private searchCities : Array<any>;


  constructor(private prodSvc : FilterService,
              private prolistSvc : ProductService,
              private router : Router) {
    this.User = {
     
    }
    this.dropOpen = false;
    this.open_bookapoint = false;
    this.filterList = this.prodSvc.getFilterList();
    this.getProductList();
    this.carsList = ["Maruthi Suzuki", "Automobile Part Dealers", "Services-Ford", "Services-Honda", "Automobile Battery Dealers-Exide"];
    this.serviceList = [" Maruti Suzuki", " Automobile Part Dealers", " Services-Ford", "Services-Honda", " Automobile Battery Dealers-Exide"];
    this.timings = ["02:00PM - 04:00PM", "03:00PM - 05:00PM", "04:00PM - 06:00PM"];

    this.searchBrands = ["Maruthi Suzuki", "Hyundai", "Volkswagen", "Tata", "Toyota"];
    this.searchCities = ["Hyderabad", "Delhi", "Mumbai", "Bangalore", "Ahmedabad"];
   }

  ngOnInit() {
   

  }
  openBookApointment(){
    this.open_bookapoint = true;
  }
  closeBookApointment(){
    this.open_bookapoint = false;
  }
  openDropDownList(){
    this.dropOpen = !this.dropOpen;
  }

  getProductList(){
    return this.prolistSvc.getProductList()
    .subscribe(result =>{
      console.log(result);
      this.ProductList = result.ProductList;
    })
  }

  getCarsList(){
    return this.carsList;
  }

  getServiceList(){
    return this.serviceList;
  }
  gettimingsList(){
    return this.timings;
  }
  getSearchBrands(){
    return this.searchBrands;
  }
  getSearchCities(){
    return this.searchCities;
  }
  getPview(){
    return this.router.navigate(['/', 'productview'])
  }

}
