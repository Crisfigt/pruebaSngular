import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

numeroFormulario: number ;
resultadoFormula: number ;


capturarResultado(resultado: number): void {
  this.resultadoFormula = resultado;
}

  enviarNumero(numero : any) {
    numero = parseInt(numero, 10)
    this.numeroFormulario = numero;
  }




}
