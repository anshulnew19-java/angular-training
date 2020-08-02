import { Component } from '@angular/core';

@Component({
    selector: 'stylebinding',
    template: 
    `
        <button [style.color]="isActive ? 'black' : 'red'" class="btn btn-warning">LOGIN</button>
    `
})

// <button [style.color]="isActive ? 'black' : 'red'" class="btn btn-warning">LOGIN</button> --> Style Binding

export class StyleBindingComponent{
    isActive = true;
}