import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { GuestModule } from './guest/guest.module';
import { GuestPageComponent } from './guest/guest-page/guest-page.component'



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'guest', component: GuestPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    GuestModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
