import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/app/dto/client-dto';
import { ClientsService } from 'src/app/services/clients.service';

/**
 * Class representa listado de clientes, permite la busqueda de clientes
 */
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html'
})
export class ClientsListComponent implements OnInit {

  clients: ClientDTO[];
  sharedKey: string;
  
  constructor(private clientService: ClientsService){
    this.clients = [];
    this.sharedKey = '';
  }

  ngOnInit(): void {
      this.getAllClients();
  }

  /**
   * Funcion que realiza la busqueda del listado de clientes
   * @void
   */
  getAllClients(): void{
    this.sharedKey = '';
    this.clearClients();
    this.clientService.getAllClients().subscribe(clients => this.clients = clients);
  }

  /**
   * Funcion que realiza la busqueda del cliente segun el shared key
   * @void
   */
  getClientBySharedKey(): void{
    this.clearClients();
    if(this.sharedKey==='' || this.sharedKey === undefined){
      return;
    }
    this.clientService.getClientBySharedKey(this.sharedKey).subscribe(client => this.clients.push(client));
  }

   /**
   * Funcion que inicializa del listado de clientes
   * @void
   */
  clearClients() {
    this.clients = [];
  }

}
