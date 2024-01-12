import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Crear un FormGroup para el formulario de registro
  registerForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private router: Router) { }

  // Método que se llama cuando se envía el formulario
  onSubmit() {
    console.log(this.registerForm.value)
    // Verificar si el formulario es válido y las contraseñas coinciden
    if (this.registerForm.valid && this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      // Crear una nueva instancia de User con los valores del formulario
      const newUser = new User(
        this.registerForm.value.nombre!,
        this.registerForm.value.email!,
        this.registerForm.value.password!,
        this.registerForm.value.confirmPassword!
      );

      // Llamar al servicio para enviar los datos al servidor
      this.userService.registrarUsuario(newUser).subscribe({
        next: (response) => {
          console.log('Usuario registrado con éxito:', response);
          this.router.navigate(['/login']); // Redirigir al usuario al inicio de sesión
        },
        error: (error) => {
          console.error('Error durante el registro:', error);
        }
      });
    } else {
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        console.error('Las contraseñas no coinciden');
        // Aquí podrías establecer algún mensaje de error en la interfaz de usuario
      }
      // Aquí podrías manejar otros casos de error o invalidación del formulario
    }
  }
}
