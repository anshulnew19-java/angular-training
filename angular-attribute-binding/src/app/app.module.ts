import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { StyleBindingComponent } from './stylebinding.component';
import { EventBindingComponent } from './eventbinding.component';
import { EventFiltringComponent } from './eventfiltring.component';
import { TwoWayBindingComponent } from './twowaybinding.component';
import { PipeComponent } from './pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFiltringComponent,
    TwoWayBindingComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
