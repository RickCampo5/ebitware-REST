import { Component, OnInit } from '@angular/core';
import {ClientRESTService} from '../services/client-rest.service'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(
    private servicioCliente: ClientRESTService
  ) { }

  clientes = []
  
  ngOnInit() {
    this.servicioCliente.showClient()
    .subscribe(clientes=>{
      this.clientes = clientes
    })
  }

}
