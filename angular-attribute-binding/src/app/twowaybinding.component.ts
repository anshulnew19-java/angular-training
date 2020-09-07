import { Component } from '@angular/core';

@Component({
    selector: 'twowaybinding',
    template: 
    `
        <h2>{{ title }}</h2>
        <input type="text" [(ngModel)]="email" name="email" />
        <p>{{ email }}</p>
    `
})



// <input type="text" [(ngModel)]="email" name="email" /> 
// <p>{{ email }}</p> ---> Two Way Binding Concept

export class TwoWayBindingComponent{
    title = "Two Way Binding";
    email = "anshul524@gmail.com";
}