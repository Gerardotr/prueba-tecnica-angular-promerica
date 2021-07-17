import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../interfaces/interfaces';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

 
  usuarios: Usuario[];
  
  public selectedIndex;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'options'];
  dataSource = new MatTableDataSource([]); 
  @ViewChild(MatSort,  { static: false }) sort!: MatSort;
 
  @ViewChild('paginator', {static: false}) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
    .subscribe(resp => { 
      this.usuarios = resp;
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

}
