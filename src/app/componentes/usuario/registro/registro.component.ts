import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../servicios/cliente.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioDeRegistro: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private clienteServicio: ClienteService
    ){
    this.formularioDeRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoDoc: ['', Validators.required],
      numDoc: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario () {
    if (this.formularioDeRegistro.valid){
      //console.log('this.formularioDeRegistro.value', this.formularioDeRegistro.value)
      this.clienteServicio.create(this.formularioDeRegistro.value)
      .subscribe(
        (res) => {
          console.log('Exito al registrar el cliente', res)
        },
        (error) => {
          console.error('Error al registrar cliente', error)

          const campo = Object.keys(error.error.detalle.errors)

          campo.forEach((campo) => {
            swal({
              text: error.error.detalle.errors[campo].message,
              icon: "warning",
              dangerMode: true,
            })
          })
        }
      )
    }else {
      swal({
        title: "Oops!",
        text: "Debes llenar todos los campos del formulario",
        icon: "warning",
        dangerMode: true,
      })
    }
  }

}

