import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
  role : String = "cliente";
  
  constructor() { }

  ngOnInit(): void {
  }

  cambiar (role: String) {
    this.role = role
  }
}
