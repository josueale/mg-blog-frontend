import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogComponent } from 'src/app/components/blog/blog.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
