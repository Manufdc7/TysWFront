import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user'; // Asegúrate de tener una clase o interfaz 'User' definida

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUrl = 'http://localhost:8080/users/register'; // URL a la API de registro
  private loginUrl = 'http://localhost:8080/users/login'; // URL a la API de inicio de sesión

  // Inyecta el HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario
  registrarUsuario(user: User): Observable<any> {
    return this.http.post(this.registerUrl, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Método para iniciar sesión
  loginUsuario(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Puedes agregar más métodos aquí según sea necesario
}
