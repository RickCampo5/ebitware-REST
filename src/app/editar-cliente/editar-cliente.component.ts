import { Component, OnInit } from '@angular/core';
import {ClientRESTService} from '../services/client-rest.service'
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(
    private servicioCliente: ClientRESTService,
    private activatedRoute: ActivatedRoute,
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
    this.activatedRoute.params
    .subscribe(params=>{
      this.servicioCliente.oneClient(params.id)
      .subscribe(cliente=>{
        this.clientes = cliente
      })
    })
  }

}
