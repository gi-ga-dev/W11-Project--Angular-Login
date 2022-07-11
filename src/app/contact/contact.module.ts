import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablePaginatorComponent } from './components/table-paginator.component';
import { ExpPanelComponent } from './components/exp-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    ContactPage,
    TablePaginatorComponent,
    ExpPanelComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule
  ]
})
export class ContactModule { }
