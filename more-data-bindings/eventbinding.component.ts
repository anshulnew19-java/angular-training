import { Component } from '@angular/core';

@Component({
    selector: 'eventbinding',
    template: 
    `
        <h2>{{ title }}</h2>
        <div (click)="onDivClick()">
            <button class="btn btn-warning" (click)="onSave($event)">LOGIN</button>
        </div>
    `
})


//<div (click)="onDivClick()"> ----------------------------------------------------
        //<button class="btn btn-warning" (click)="onSave($event)">LOGIN</button> |----> Event Bubbling
//</div>                       ---------------------------------------------------- 

// $event.stopPropagation(); ---> To stop Event Bubbling

export class EventBindingComponent{
    title = "Event Binding";
    onDivClick(){
        console.log("Div was Clicked!!!");
    }
    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked!!!", $event);
    }
}