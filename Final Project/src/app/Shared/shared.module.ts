import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog"
import { MatTableModule } from "@angular/material/table";
import { FullNamePipe } from './pipes/full-name.pipe';


@NgModule({
  declarations: [
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports:  [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    FullNamePipe,
  ]
})
export class SharedModule { 
  
}