import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgClass,
    NgStyle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
