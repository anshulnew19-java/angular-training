import { Component } from '@angular/core';

@Component({
    selector: 'pipe',
    template: 
    `
        <h2>{{ title }}</h2>
        {{ pipe.title | uppercase | lowercase }} <br/>
        {{ pipe.rating  | number }} <br/>
        {{ pipe.students | number: '2.1-1' }} <br/>
        {{ pipe.price | currency: 'AUD' :true :'3.2-2' }} <br/>
        {{ pipe.releaseDate | date: 'shortDate' }}
    
    `
})


export class PipeComponent{
    title = "Pipes Component";
    pipe = {
        title: "My Name is Anshul",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2020, 8, 1)

    }
}