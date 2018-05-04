import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { UsuariosComponent } from './usuarios.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ UsuariosComponent ],
  bootstrap:    [ UsuariosComponent ]
})

export class UsuariosModule {}
