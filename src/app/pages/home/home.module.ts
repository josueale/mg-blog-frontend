import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostCardComponent } from './components/posts/post-card/post-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, PostCardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
