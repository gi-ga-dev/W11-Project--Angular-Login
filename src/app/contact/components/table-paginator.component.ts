import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/auth/auth.service';
import { ISignupData } from 'src/app/auth/interfaces/isignup-data';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit, AfterViewInit {

  users: ISignupData[] = [];
  error = undefined;

  USERS_DATA = this.users;

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  dataSource = new MatTableDataSource<any>(USERS_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    /* all'avvio prende i dati e li inserisce dentro users */
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userLogin => {

      this.http.get<ISignupData[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken })
      })
        .subscribe(
          resp => {
            this.users = resp;

            console.log(this.users);
          },
          err => {
            this.error = err.error
          }
        )
    })
  }

}

const USERS_DATA: ISignupData[] = [
  { id: 1, firstname: 'Hydrogen', lastname: '1.0079', email: 'H' },
  { id: 2, firstname: 'Helium', lastname: '4.0026', email: 'He' },
  { id: 3, firstname: 'Lithium', lastname: '6.941', email: 'Li' },
  { id: 4, firstname: 'Beryllium', lastname: '9.0122', email: 'Be' },
  { id: 5, firstname: 'Boron', lastname: '10.811', email: 'B' },
  { id: 6, firstname: 'Carbon', lastname: '12.0107', email: 'C' },
  { id: 7, firstname: 'Nitrogen', lastname: '14.0067', email: 'N' },
  { id: 8, firstname: 'Oxygen', lastname: '15.9994', email: 'O' },
  { id: 9, firstname: 'Fluorine', lastname: '18.9984', email: 'F' },
  { id: 10, firstname: 'Neon', lastname: '20.1797', email: 'Ne' },
  { id: 11, firstname: 'Sodium', lastname: '22.9897', email: 'Na' },
  { id: 12, firstname: 'Magnesium', lastname: '24.305', email: 'Mg' },
  { id: 13, firstname: 'Aluminum', lastname: '26.9815', email: 'Al' },
  { id: 14, firstname: 'Silicon', lastname: '28.0855', email: 'Si' },
  { id: 15, firstname: 'Phosphorus', lastname: '30.9738', email: 'P' },
  { id: 16, firstname: 'Sulfur', lastname: '32.065', email: 'S' },
  { id: 17, firstname: 'Chlorine', lastname: '35.453', email: 'Cl' },
  { id: 18, firstname: 'Argon', lastname: '39.948', email: 'Ar' },
  { id: 19, firstname: 'Potassium', lastname: '39.0983', email: 'K' },
  { id: 20, firstname: 'Calcium', lastname: '40.078', email: 'Ca' },
];
