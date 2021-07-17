import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../interfaces/interfaces';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    id: [Math.floor(Math.random() * 100000), [Validators.required]],
    nombre: ['test', [Validators.required, Validators.minLength(4)]],
    apellido: ['test', [Validators.required, Validators.minLength(4)]],
  });


  public selectedIndex;
  usuario: Usuario;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, public dialog: MatDialog, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  register() {
    console.log(this.registerForm.value);
    const { nombre, apellido, id } = this.registerForm.value;



    this.usuarioService.agregarUsuario({nombre, apellido, id}).subscribe(res => {
      console.log(res);
      // TODO: mostrar mensaje de error
      this.mostrarSnakbar('Usuario registrado')

    });

  }


  mostrarSnakbar(mensaje: string) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });

  }





}
