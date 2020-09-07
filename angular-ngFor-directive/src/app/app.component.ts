import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-directive';

  courses = [
    {id: 1,name: "Java"},
    {id: 2,name: "C++"},
    {id: 3,name: "Php"},
    {id: 4,name: "Python"}
  ]

  onAdd() {
    this.courses.push({ id: 5, name: ".NET" });
  }

  onDelete(course){
      let index = this.courses.indexOf(course);
      this.courses.splice(index, 1);
  }

  onUpdate(course){
    course.name = "UPDATE";
  }
}
