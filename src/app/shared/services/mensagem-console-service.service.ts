import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleServiceService extends IMensagem{

  constructor( ) {
    super()
   }

  erro(mensagem: string): void {
    console.log(mensagem)
  }

  info(){}

  sucesso(mensagem: string): void {
    console.log(mensagem)
  }
}
