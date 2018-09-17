import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ClientComponent} from './client/client.component'
import {routes} from './routes';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    EditarClienteComponent,
    NuevoClienteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
