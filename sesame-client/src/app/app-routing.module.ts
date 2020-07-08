import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { GuestModule } from './guest/guest.module';
import { SharedModule } from './shared/shared.module';
import { EntryFormComponent } from './shared/entry-form/entry-form.component'
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
class CanActivateLogin implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return !this.authService.isLogged;
  }
}    1


const routes: Routes = [
  {path: '', component: EntryFormComponent},
  {path: 'login', component: LoginComponent, canActivate: [CanActivateLogin] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    GuestModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: [CanActivateLogin, AuthService]
  
})
export class AppRoutingModule { }
