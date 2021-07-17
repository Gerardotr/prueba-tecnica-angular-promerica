import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { Producto } from '../interfaces/interface';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  registerForm: FormGroup = this.fb.group({
    id: [Math.floor(Math.random() * 100000), [Validators.required]],
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    descripcion: ['', [Validators.required]],
    precio: ['', [Validators.required]],
  });


  public selectedIndex;
  producto: Producto;
  constructor(private router: Router,private fb: FormBuilder, private snackBar: MatSnackBar, public dialog: MatDialog, private productoService: ProductoService) { }

  ngOnInit(): void {
  }


  register() {
    console.log(this.registerForm.value);
    const { nombre, descripcion, precio, id } = this.registerForm.value;
    this.productoService.agregarProducto({ nombre, descripcion, precio, id }).subscribe(res => {
      console.log(res);
      // TODO: mostrar mensaje de error
      this.mostrarSnakbar('Producto registrado')

    });

  }


  mostrarSnakbar(mensaje: string) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });
    this.router.navigate(['/producto/listado']);

  }




}
