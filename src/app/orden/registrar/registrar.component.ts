import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Order } from '../interfaces/interfaces';
import { OrdenService } from '../services/orden.service';
import { ProductoService } from '../../producto/services/producto.service';
import { Producto } from '../../producto/interfaces/interface';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { Usuario } from '../../usuario/interfaces/interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  selectedItem: string;
 productos: Producto[];
 fecha = new Date();
 clientes: Usuario[];
  registerForm: FormGroup = this.fb.group({
    id: [Math.floor(Math.random() * 100000), [Validators.required]],
    selectedValue: [],
    fecha: [new Date()],
    selectedProd: [],
    idProducto: [[Validators.required]],
    idCliente: ['', [ Validators.required]],
    idOrden: [[Math.floor(Math.random() * 100000), Validators.required]],
    cantidad: [[Validators.required]],
    country: new FormControl(null)
  });


  public selectedIndex;
  order: Order;
  constructor(private clienteService: UsuarioService, private productoService: ProductoService, private router: Router,private fb: FormBuilder, private snackBar: MatSnackBar, public dialog: MatDialog, private orderService: OrdenService) { }

  ngOnInit(): void {
    this.getClientes();
    this.getProdutos();
  }


  register() {
    console.log(this.registerForm.value);
    const { idCliente, idProducto,  id, cantidad, fecha } = this.registerForm.value;

  


    this.orderService.agregarOrder({ idCliente, idProducto, id, cantidad, fecha  }).subscribe(res => {
      console.log(res);
      // TODO: mostrar mensaje de error
      this.mostrarSnakbar('Producto registrado')

    });

  }
  getProdutos() {
    this.productoService.getProductos()
    .subscribe(resp => { 
      this.productos = resp;
    });

  }

  getClientes() {
    this.clienteService.getUsuarios()
    .subscribe(resp => { 
      this.clientes = resp;
    });

  }



  mostrarSnakbar(mensaje: string) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });
    this.router.navigate(['/orden/listado']);

  }

}
