import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrdenService } from '../services/orden.service';
import { Order } from '../interfaces/interfaces';

@Component({
  selector: 'app-ordens',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {


  orders: Order[];
  selectedValue: string;

  

  
  public selectedIndex;
  displayedColumns: string[] = ['idProducto', 'idCliente', 'idOrden', 'cantidad', 'fecha', 'options'];
  dataSource = new MatTableDataSource([]); 
  @ViewChild(MatSort,  { static: false }) sort!: MatSort;
 
  @ViewChild('paginator', {static: false}) paginator!: MatPaginator;

  constructor(private orderService: OrdenService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdens()
    .subscribe(resp => { 
      this.orders = resp;
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }
}
