import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { ParkingInterface } from '../../../app-interface/parking-interface';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { REST } from 'src/app/app-service/rest-connections.service';
import { UserService } from 'src/app/app-service/user.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    searchFormField: ['', [ ]]
  });

  displayedColumns: string[] = ['id', 'name', 'location', 'latitude', 'longitude', 'price', 'status'];
  dataSource: MatTableDataSource<ParkingInterface> = new MatTableDataSource();

  
  title: string = "";
  loading:boolean = false;
  length:number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatPaginator) set _paginator(paginator: MatPaginator) {
    this.paginator = paginator;
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
    private restService: RestManagerService,
    private userService: UserService
  ) { 
    this.title = "";
  }

  ngOnInit(): void {
    this.loading = true;
    const data = new Map<string, string>();
    // data.set('index', this.paginator.pageIndex.toString());
    // data.set('items', this.paginator.pageSize.toString());
    // data.set('sort', ((this.sort.active !== null && this.sort.active !== undefined && this.sort.active !== '') ? this.sort.active : 'id'));
    // data.set('direction', ((this.sort.direction !== null && this.sort.direction !== undefined && this.sort.direction !== '') ? this.sort.direction.toUpperCase() : 'DESC'));

    data.set('index', '0');
    data.set('items', '5'); 
    this.callService('0', '5', true /*, 'id', 'DESC'*/);
  }

  search(): void{
    this.paginator.pageIndex = 0;

    if(this.myForm.valid){
      this.callService(this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString(),
      false, 
      this.myForm.value['searchFormField']);
    }else{
      this.callService(
        this.paginator.pageIndex.toString(),
        this.paginator.pageSize.toString());
    }
  }

  changePage():void{
    this.callService(
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString()
      )
  }

  callService(index: string, items:string, initial:boolean = false, search:string = ''){
    this.loading = true;
    const data = new Map<string, string>();
    data.set('index', index);
    data.set('items', items);
    console.log(this.userService.getData())
    data.set('user', '6');
    if(search!=''){
      data.set('search', search);
    }

    this.restService.getWithParams(REST.service.console, 'parking', data).subscribe(
      (response:any) => {
        this.loading = false;
        console.table(response);
        this.dataSource = new MatTableDataSource(response['data']);
        if(initial){
          this.dataSource.paginator = this.paginator;
        }
        this.length = response['count'];
      }, (error:string) => {
        console.error(JSON.stringify(error));
        this.loading = false;
      });
  }

}