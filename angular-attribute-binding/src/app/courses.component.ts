import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: 
    `
        <h2>{{ title }}</h2> 
        <img src="{{ imageUrl }}" />
        <table border="2">
            <tr>
                <!-- <td [att.colspan] = "colSpan"> Hi</td> -->
            </tr>
        </table>

        <button class="btn btn-primary">SAVE</button>
    `
})

// <h2>{{ title }}</h2>  --> String Interpolation Technique.
// <img src="{{ imageUrl }}" /> --> Property Binding.
// <td [att.colspan] = "colSpan"> Hi</td> --> Attribute Binding.
// npm install bootstrap --save --> command to install bootstrap.
// @import "~bootstrap/dist/css/bootstrap.css"; --> to call bootstrap in to global css file.

export class CoursesComponent{
    title = "Angular Courses";
    colSpan = 2;
    imageUrl = "https://picsum.photos/536/354";
}