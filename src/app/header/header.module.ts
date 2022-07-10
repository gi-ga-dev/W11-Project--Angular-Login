import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';

/* ------------ Material ------------ */
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavbarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
