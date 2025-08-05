import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { UsuarioListar } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }


  GetUsuarios(): Observable<UsuarioListar[]> {
  return this.http.get<UsuarioListar[]>(`${this.ApiUrl}`);
  }

  DeletarUsuario(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.ApiUrl}/${id}`);
  }

  CriarUsuario(usuario: UsuarioListar): Observable<UsuarioListar> {
    return this.http.post<UsuarioListar>(this.ApiUrl, usuario);
  }

  GetUsuarioId(id: number): Observable<UsuarioListar> {
    return this.http.get<UsuarioListar>(`${this.ApiUrl}/${id}`);
  }

  EditarUsuario(usuario: UsuarioListar): Observable<UsuarioListar> {
    //return this.http.put<UsuarioListar>(this.ApiUrl, usuario);
    return this.http.put<UsuarioListar>(`${this.ApiUrl}/${usuario.id}`, usuario);
  }

}
