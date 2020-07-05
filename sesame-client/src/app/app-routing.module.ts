import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { GuestModule } from './guest/guest.module';
import { SharedModule } from './shared/shared.module';
import { EntryFormComponent } from './shared/entry-form/entry-form.component'



const routes: Routes = [
  {path: '', component: EntryFormComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    GuestModule,
    SharedModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
