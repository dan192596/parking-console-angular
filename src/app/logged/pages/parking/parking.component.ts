import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { ParkingInterface } from '../../../app-interface/parking-interface';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    locationFormField: ['', [ Validators.required, Validators.email ]]
  });

  displayedColumns: string[] = ['id', 'location', 'latitude', 'longitude', 'price', 'status'];
  dataSource: MatTableDataSource<ParkingInterface> = new MatTableDataSource();;

  
  title: string = "";
  loading:boolean = false;
  length:number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute
  ) { 
    this.title = "";
  }

  ngOnInit(): void {
  }

  search(): void{
    console.log("Buscando")
  }

}


// [
  //   {
  //     id:1,
  //     location:"Mi lugar de prueba", 
  //     latitude: 454,
  //     longitude: 1223,
  //     priceHour: 15654,
  //     status: {
  //       id:1,
  //       description: "Estado de prueba"
  //     }
  //   },
  //   {
  //     id:1,
  //     location:"Mi lugar de prueba", 
  //     latitude: 454,
  //     longitude: 1223,
  //     priceHour: 15654,
  //     status: {
  //       id:1,
  //       description: "Estado de prueba"
  //     }
  //   }
  // ];

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;