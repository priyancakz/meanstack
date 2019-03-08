import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComComponent } from './first-com/first-com.component';
import { SecondComComponent } from './second-com/second-com.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComComponent,
    SecondComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
