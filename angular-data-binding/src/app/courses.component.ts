import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: 
    `
        <h2>{{ title }}</h2> 
        <img src="{{ imageUrl }}" />
    `
})

// <h2>{{ title }}</h2>  --> String Interpolation Technique
// <img src="{{ imageUrl }}" /> --> Property Binding

export class CoursesComponent{
    title = "Angular Courses";
    imageUrl = "https://picsum.photos/536/354";
}
