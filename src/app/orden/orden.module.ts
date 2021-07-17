import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenRoutingModule } from './orden-routing.module';
import { OrdenComponent } from './orden/orden.component';
import { IndexComponent } from './index/index.component';
import { OrdensComponent } from './ordens/ordens.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdenComponent,
    IndexComponent,
    OrdensComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    OrdenRoutingModule
  ]
})
export class OrdenModule { }
