import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [HomeComponent,AboutComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PagesModule { }
