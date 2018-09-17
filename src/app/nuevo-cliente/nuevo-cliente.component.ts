import { Component, OnInit } from '@angular/core';
import {ClientRESTService} from '../services/client-rest.service'

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  constructor(
    private servicioCliente: ClientRESTService
  ) { }

  cliente: any = {}

  guardar(){
    this.servicioCliente.newClient(this.cliente)
    .subscribe(cliente=>{
      alert(`Cliente Creado Id: ${cliente.Cliente_ID}`)
    })
  }

  ngOnInit() {
  }

}
