import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/data.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

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
  private tabOver : boolean;
  private tabSpe : boolean;
  private tabRating : boolean;

  private isListActive1 : boolean;
  private isListActive2 : boolean;
  private isListActive3 : boolean;


  constructor(private prodSvc : FilterService,
              private prolistSvc : ProductService,
              private router : Router) {
    this.User = {
      name : '',
      email : '',
      message : ''
    }
   
    this.tabOver = true;
    this.tabSpe = false;
    this.tabRating = false;
    this.dropOpen = false;

    this.open_bookapoint = false;
    this.filterList = this.prodSvc.getFilterList();
    this.getProductList();
    this.carsList = ["Maruthi Suzuki", "Automobile Part Dealers", "Services-Ford", "Services-Honda", "Automobile Battery Dealers-Exide"];
    this.serviceList = [" Maruti Suzuki", " Automobile Part Dealers", " Services-Ford", "Services-Honda", " Automobile Battery Dealers-Exide"];
    this.timings = ["02:00PM - 04:00PM", "03:00PM - 05:00PM", "04:00PM - 06:00PM"];

   //this.searchBrands = ["Maruthi Suzuki", "Hyundai", "Volkswagen", "Tata", "Toyota"];
   this.searchBrands = [
    { id : 1, brand : 'Maruthi Suzuki', checked : false},
    { id : 2, brand : 'Hyundai', checked : false},
    { id : 3, brand : 'Volkswagen', checked : false},
    { id : 4, brand : 'Tata', checked : false},
    { id : 5, brand : 'Toyota', checked : false}
  ];
  this.searchCities = [
    { id : 11, city : 'Hyderabad', checked : false},
    { id : 22, city : 'Delhi', checked : false},
    { id : 33, city : 'Mumbai', checked : false},
    { id : 44, city : 'Bangalore', checked : false},
    { id : 55, city : 'Ahmedabad', checked : false}
  ];
  //this.searchCities = ["Hyderabad", "Delhi", "Mumbai", "Bangalore", "Ahmedabad"];
  this.isListActive1 = true;
  this.isListActive2 = false;
  this.isListActive3 = false;
  
 
   }

  ngOnInit() {
   

  }

  addClass1(){
    this.isListActive1 = true;
    this.isListActive2 = false;
    this.isListActive3 = false;

  }
  addClass2(){
    this.isListActive2 = true;
    this.isListActive1 = false;
    this.isListActive3 = false;
  }
  addClass3(){
    this.isListActive3 = true;
    this.isListActive1 = false;
    this.isListActive2 = false;
  }
  openTabOver(event){
    this.tabOver = true;
    this.tabSpe = false;
    this.tabRating = false;
    
    
  }
  openTabSpec(event){
    this.tabOver = false;
    this.tabSpe = true;
    this.tabRating = false;
    
   
  }
  openTabRating(event){
    this.tabOver = false;
    this.tabSpe = false;
    this.tabRating = true;
    
   
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
