import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    DetalleComponent
  ],
})
export class PagesModule { }
