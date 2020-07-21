


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskdilogComponent } from './taskdilog/taskdilog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddListComponent } from './addlist/addlist.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskdilogComponent,
    AddListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskdilogComponent, AddListComponent]
})
export class AppModule { }

