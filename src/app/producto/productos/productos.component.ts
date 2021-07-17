import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../interfaces/interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

 
  productos: Producto[];
  
  public selectedIndex;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio', 'options'];
  dataSource = new MatTableDataSource([]); 
  @ViewChild(MatSort,  { static: false }) sort!: MatSort;
 
  @ViewChild('paginator', {static: false}) paginator!: MatPaginator;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.productoService.getProductos()
    .subscribe(resp => { 
      this.productos = resp;
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

}
