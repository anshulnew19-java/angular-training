import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form;

  // Old Style to declear form component
// form = new FormGroup({
//   name: new FormControl("", Validators.required),
//   contact: new FormGroup({
//     email: new FormControl(),
//     phone: new FormControl()
//   }),
//   topics: new FormArray([])
// })

  // New Way by using formBuilder to declear form component
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
   }

  ngOnInit(): void {
  }

}
