import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: 
    `
        <h2>{{ title }}</h2> 
        <img src="{{ imageUrl }}" />
        <table border="2">
            <tr>
                <td [att.colspan] = "colSpan"> Hi</td>
            </tr>
        </table>
    `
})

// <h2>{{ title }}</h2>  --> String Interpolation Technique
// <img src="{{ imageUrl }}" /> --> Property Binding
// <td [att.colspan] = "colSpan"> Hi</td> --> Attribute Binding

export class CoursesComponent{
    title = "Angular Courses";
    colSpan = 2;
    imageUrl = "https://picsum.photos/536/354";
}