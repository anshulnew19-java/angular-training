import { Component } from '@angular/core';

@Component({
    selector: 'eventfiltring',
    template: 
    `
        <h2>{{ title }}</h2>

        <input (keyup.enter)="onKeyUp()" />
    `
})



export class EventFiltringComponent{
    title = "Event Filtring";
    onKeyUp(){
        console.log("Enter was clicked!!!");
    }
}