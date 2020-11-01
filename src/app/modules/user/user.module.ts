import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [HomeComponent, PostComponent, CommentComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
