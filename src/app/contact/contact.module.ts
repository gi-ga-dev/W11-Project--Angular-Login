import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablePaginatorComponent } from './components/table-paginator.component';


@NgModule({
  declarations: [
    ContactPage,
    TablePaginatorComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ContactModule { }
