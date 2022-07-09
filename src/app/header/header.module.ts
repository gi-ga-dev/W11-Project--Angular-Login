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
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
