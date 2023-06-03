import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe} from './pipe/cpf.pipe';
import { TelPipe } from './pipe/tel.pipe';



@NgModule({
  declarations: [CpfPipe, TelPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    TelPipe
  ]
})
export class PipesModule { }
