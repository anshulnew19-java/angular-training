import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  contactMethod = [
    {id: 1, name: "Email"},
    {id: 2, name: "Phone"}
  ];

  contactMultiple = [
    {id: 1, name: "Delhi"},
    {id: 2, name: "Mumbai"}
  ];

  contactRadio = [
    {id: 1, name: "Pizza"},
    {id: 2, name: "Burger"},
    {id: 3, name: "Pasta"}
  ];

  log(x) { console.log(x); }
  
  submit(f){ console.log(f); }
}
