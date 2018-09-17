import {Routes} from '@angular/router'

import {ClientComponent} from './client/client.component'
import {EditarClienteComponent} from './editar-cliente/editar-cliente.component'
import {NuevoClienteComponent} from './nuevo-cliente/nuevo-cliente.component'

export const routes: Routes = [
  {path:'', redirectTo:'client', pathMatch:'full'},
  {path:'client', component:ClientComponent},
  {path:'editarCliente/:id', component:EditarClienteComponent},
  {path:'nuevoCliente', component:NuevoClienteComponent}
]