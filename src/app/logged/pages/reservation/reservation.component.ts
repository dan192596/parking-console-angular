import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ReservationInterface } from 'src/app/app-interface/reservation-interface';
import { REST } from 'src/app/app-service/rest-connections.service';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { UserService } from 'src/app/app-service/user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    searchFormField: ['', [ ]]
  });

  displayedColumns: string[] = ['id', 'start', 'end', 'parking', 'vehicle', 'status', 'actions'];
  dataSource: MatTableDataSource<ReservationInterface> = new MatTableDataSource();

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
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const data = new Map<string, string>();
    data.set('index', '0');
    data.set('items', '5'); 
    this.callService('0', '5', true);
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
    data.set('owner', this.userService.getData()['id']);
    if(search!=''){
      data.set('search', search);
    }

    this.restService.getWithParams(REST.service.console, 'reservation', data).subscribe(
      (response:any) => {
        this.loading = false;
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
