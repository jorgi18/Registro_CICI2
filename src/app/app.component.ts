import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  registrar() {
    const codigo = (document.getElementById('codigo') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    if (codigo && password) {
      const mensaje = document.getElementById('mensaje');
      if (mensaje) mensaje.innerText = '¡Registro exitoso!';
    }
  }
}