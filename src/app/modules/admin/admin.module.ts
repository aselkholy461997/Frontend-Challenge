import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminApiService } from './services/admin-api.service';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [DashboardComponent, UserDetailsComponent],
  imports: [AdminRoutingModule, SharedModule],
  providers: [AdminApiService],
})
export class AdminModule {}
