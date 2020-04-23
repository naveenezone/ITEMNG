import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ItemDetailComponent } from './item-list/item-detail/item-detail.component';
import { ItemEditComponent } from './item-list/item-edit/item-edit.component';
import { ItemListComponent } from './item-list/item-list.component';
import { RouteGuardAuthService } from './shared/service/auth/route-guard-auth.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  // 
  { path: 'items', component: ItemListComponent, canActivate: [RouteGuardAuthService] },
  { path: 'item', component: ItemDetailComponent, canActivate: [RouteGuardAuthService] },
  { path: 'items/:id', component: ItemDetailComponent, canActivate: [RouteGuardAuthService] },
  { path: 'item-edit', component: ItemEditComponent, canActivate: [RouteGuardAuthService] },
  { path: 'items/:id/edit', component: ItemEditComponent, canActivate: [RouteGuardAuthService] },
  { path: 'items/:id/new', component: ItemEditComponent, canActivate: [RouteGuardAuthService] },
  { path: 'items/view/:id', component: ItemDetailComponent, canActivate: [RouteGuardAuthService] },
  // 
  { path: '**', component: ErrorComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
