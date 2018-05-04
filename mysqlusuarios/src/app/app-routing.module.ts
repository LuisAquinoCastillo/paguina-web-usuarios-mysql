import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* importacion de componentes de las paginas*/
import {UsuariosComponent} from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ UsuariosComponent ];
