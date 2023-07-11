/*
  * Aquí puedo importar los angular Material que voy a utilizar en la mayoría de modulos
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SharedModule { }
