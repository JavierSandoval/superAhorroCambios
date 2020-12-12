import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../servicios/cliente.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-inisio-sesion-cuenta',
  templateUrl: './inisio-sesion-cuenta.component.html',
  styleUrls: ['./inisio-sesion-cuenta.component.scss']
})
export class InisioSesionCuentaComponent implements OnInit {
  formularioInisioDeSesion: FormGroup;
  token: any;

  constructor(
    private formBuilder: FormBuilder, //contruir un formulario de grupo //Crear un solo grupo de un un formulario
    private clienteServicio: ClienteService
  ) {
    this.formularioInisioDeSesion = this.formBuilder.group({//tenemos el formulario distansiado en TS
      //ngModel nos sirve para enlazar una variable con un campo
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })

    console.log('token en el constructor', this.token)
  }

  ngOnInit(): void {
  }

  inisiarSesion() {
    if (this.formularioInisioDeSesion.valid) {
      this.clienteServicio.autenticacion(this.formularioInisioDeSesion.value)
        .subscribe(
          (token: any) => {
            // Utilizo un metodo del servicio de clientes para almacenar el token recibido
            this.clienteServicio.guardarToken(token.jwt);
            swal({
              title: "Has iniciado sesion con exito",
              text: "Vuelve a la pagina de inicio",
              icon: "success"
            });
          },
          (error) => {
            console.error('Error en la autenticación: ', error);
            swal(
              {
                title: "Error al iniciar sesion",
                text: "Intenta de nuevo",
                icon: "warning",
                dangerMode: true,
              });
          }
        )
    }
  }
}

  //prevenir recarga de la pagina

