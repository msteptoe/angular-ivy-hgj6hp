import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ChildComponent } from './child/child.component';
import { ChildSubjectComponent } from './child-subject/child-subject.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    ChildSubjectComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
