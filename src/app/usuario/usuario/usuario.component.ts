import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {switchMap} from 'rxjs/operators';
import { Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario!: Usuario;

  constructor( private activatedRoute: ActivatedRoute,
               private usuarioService: UsuarioService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.usuarioService.getUsuarioPorId(id) )
      )
      .subscribe( usuario => this.usuario = usuario );

  }

  regresar() {
    this.router.navigate(['/cliente/listado']);
  }

}
