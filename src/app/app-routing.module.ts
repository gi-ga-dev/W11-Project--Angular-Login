import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { HomePage } from './home/home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)

  },
  {
    path: 'contact',
    canActivate: [AuthGuard],
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    loadChildren: () => import('./err404/err404.module').then(m => m.Err404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
