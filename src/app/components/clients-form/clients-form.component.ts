import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDTO } from 'src/app/dto/client-dto';
import { ClientsService } from 'src/app/services/clients.service';

/**
 * Class representa el form de registrar o actualizar clientes
 */
@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html'
})
export class ClientsFormComponent implements OnInit {

  client: ClientDTO = {
    id: '',
    sharedKey: '',
    businessId: '',
    email: '',
    phone: '',
    dateAdded: new Date()
  };
  message: string;

  constructor(private clientService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute){ 
    this.message = '';
  }

  ngOnInit(): void {
    this.findClientBySharedKey();
  }

   /**
   * Funcion que realiza la busqueda del cliente
   * @void
   */
  findClientBySharedKey(): void{
    this.activatedRoute.params.subscribe((params) => {
      let sharedKey = params['sharedKey'];
      if(sharedKey) {
        this.clientService.getClientBySharedKey(sharedKey).subscribe(client => this.client = client);
      }
    });
  }

   /**
   * Funcion que realiza el registro del cliente
   * @void
   */
  registerClient(): void{
    this.clientService.createClient(this.client).subscribe({
      next: ()=>{
        this.message = 'New Client is registered';
        this.router.navigate(['/clients']);
      },
      error: error =>{
        this.message = 'New Client is not registered. Try again!';
      }
      
    });
  }

   /**
   * Funcion que realiza la actualizacion del cliente
   * @void
   */
  updateClient(): void{
    this.clientService.updateClient(this.client).subscribe({
      next: ()=>{
        this.router.navigate(['/clients']);
      },
      error: error =>{
        this.message = 'Client is not updated. Try again!';
      }
      
    });
  }

  /**
   * Funcion que regresa al form anterior
   * @void
   */
  back(): void {
    this.router.navigate(['/clients']);
  }

}
