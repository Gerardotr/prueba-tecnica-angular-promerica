import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
  path: '',
  component: IndexComponent,
  children: [
    {path: '', redirectTo: 'listado'},
    { path: 'listado', component: ProductosComponent },
    { path: 'ver/:id', component: ProductoComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'editar/:id', component: RegistrarComponent },
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
