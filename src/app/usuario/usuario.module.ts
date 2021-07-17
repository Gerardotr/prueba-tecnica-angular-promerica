import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { IndexComponent } from './index/index.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    IndexComponent,
    RegistrarComponent,
    UsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
