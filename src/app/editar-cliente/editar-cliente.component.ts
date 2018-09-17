import { Component, OnInit } from '@angular/core';
import {ClientRESTService} from '../services/client-rest.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(
    private servicioCliente: ClientRESTService,
    private router: Router 
  ) { }

  clientes = []

  guardar(){
    this.servicioCliente.editClient(this.clientes[0])
    .subscribe(()=>{
      this.router.navigate(['client'])
    })
  }

  ngOnInit() {
    this.servicioCliente.oneClient("1")
    .subscribe(cliente=>{
      this.clientes = cliente
    })
  }

}
