import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../interfaces/interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto!: Producto;

  constructor( private activatedRoute: ActivatedRoute,
               private productoService: ProductoService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productoService.getProductoPorId(id) )
      )
      .subscribe( producto => this.producto = producto );

  }

  regresar() {
    this.router.navigate(['/producto/listado']);
  }


}
