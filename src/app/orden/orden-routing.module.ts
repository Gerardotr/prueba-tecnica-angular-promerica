import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OrdenComponent } from './orden/orden.component';
import { OrdensComponent } from './ordens/ordens.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '', redirectTo: 'listado'},
      { path: 'listado', component: OrdensComponent },
      { path: 'ver/:id', component: OrdenComponent },
      { path: 'registrar', component: RegistrarComponent },
      { path: 'editar/:id', component: RegistrarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenRoutingModule { }
