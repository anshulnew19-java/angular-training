import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create an Array of Object
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anshul","Kumar","anshul524@gmail.com",5000),
    new SalesPerson("Saakshi","Raj","saakshi.raj11@yahoo.com",9000),
    new SalesPerson("Rakesh","Sahini","rk111@gmail.com",3000),
    new SalesPerson("Sweta","Singh","swete.s@gmail.com",2000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
