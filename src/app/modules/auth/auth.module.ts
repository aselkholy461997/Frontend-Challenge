import { SharedModule } from './../shared/shared.module';
import { AuthHomeComponent } from './views/auth-home/auth-home.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthApiService } from './services/auth-api.service';

@NgModule({
  declarations: [AuthHomeComponent],
  imports: [AuthRoutingModule, SharedModule],
  providers: [AuthApiService],
})
export class AuthModule {}
