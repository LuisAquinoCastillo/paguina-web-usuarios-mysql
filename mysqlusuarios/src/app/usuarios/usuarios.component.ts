import { Component, OnInit } from '@angular/core';

/* Importacion de Http */
import { HttpClient } from '@angular/common/http';
/*Importacion de clases */
import { Estatus } from './estatus';
import { EquipoString } from './equipoString';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  estatus: Estatus;
  todosUsuarios: EquipoString[];
  operaciones: EquipoString;
  formulario: EquipoString = {
    nombre: 'Luis',
    apellidoPat: 'Aquino',
    apellidoMat: 'Pérez',
    fechaNac: '1996-11-15',
    curp: 'AUPL670831',
    calle: 'Hda. Tomacoco',
    numeroCasa: '54',
    colonia: 'Impulsora popular',
    delegacion: 'Nezahualcoyotl',
    estado: 'México',
    tipoPermiso: 'Usuario',
    estatus: 'true',
    telefonoCas: '57830247',
    telefonoCel: '5556987225'
  };

  ngOnInit() {
  }

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.http.get<EquipoString[]>('localhost:8080/rest/Usuarios/todos').
      subscribe(respuesta => {this.todosUsuarios = respuesta; });
    }, 1200);
  }

  // Metodo para guardar un usuario
  public guardarRegistro() {
    this.http.post<Estatus>('localhost:8080/rest/Usuarios/guardar', this.formulario).
    subscribe(respuesta => {this.estatus = respuesta; });
    setTimeout(() => {}, 1500);
  }

}


/*
export class UsuariosComponent2 {
  estatus: Estatus;
  todosUsuarios: EquipoString[];
  operaciones: EquipoString;
  formulario: EquipoString = {
    nombre: 'Luis',
    apellidoPat: 'Aquino',
    apellidoMat: 'Pérez',
    fechaNac: '1996-11-15',
    curp: 'AUPL670831',
    calle: 'Hda. Tomacoco',
    numeroCasa: '54',
    colonia: 'Impulsora popular',
    delegacion: 'Nezahualcoyotl',
    estado: 'México',
    tipoPermiso: 'Usuario',
    estatus: 'true',
    telefonoCas: '57830247',
    telefonoCel: '5556987225'
  };

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.http.get<EquipoString[]>('localhost:8080/rest/Usuarios/todos').
      subscribe(respuesta => {this.todosUsuarios = respuesta; });
    }, 1200);
  }

  // Metodo para guardar un usuario
  public guardarRegistro() {
    this.http.post<Estatus>('localhost:8080/rest/Usuarios/guardar', this.formulario).
    subscribe(respuesta => {this.estatus = respuesta; });
    setTimeout(() => {}, 1500);
  }
}*/
