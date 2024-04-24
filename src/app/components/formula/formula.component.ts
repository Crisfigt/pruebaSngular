import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-formula',
  template: '',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnChanges{
  @Input() numeroRecibido: number;
  @Output() resultadoCalculado = new EventEmitter<number>();

resultadoFinal ;



ngOnChanges(changes: SimpleChanges): void {
  if (changes['numeroRecibido'] && !changes['numeroRecibido'].firstChange) {
    this.calcularFormula();

  }
}

calcularFormula(): void {
  this.resultadoFinal = this.formulaGeneral(this.numeroRecibido);
  this.resultadoCalculado.emit(this.resultadoFinal);


}


/* FORMULA TRIANGULAR */
 triangular(n : number){
    let n0 = n + 2;
    let n1 = n0+1;
    let n2 = n1 * n0;
    let n3 = n2/2;
    return n3;
 }



 /* NUMERO PRIMO */

 primo(n : number ) {
  n = n-2;
  let primo =false;
  if(n <= 1){
      primo = false;
      return false;
  }
  let contador =0;
  for(let i =2; i < n; i++){
      if(n % i == 0){
          contador++
          primo = false;
          return false;
      }
  }
  if(contador = 2){
    primo = true;
    return true;
  }
  return primo;
}

/* COMPRUEBA Y DEVUELVE NUMERO PRIMO */
devuelvePrimo(n : number){
  if(this.primo(n) === true){
    return n-2;
  }else{
    return 0;
  }
}



/* FIBONACI */

fibonacci(n: number): number {
  let a: number = 0;
  let b: number = 1;
  let resultado: number = 0;

  for (let i = 0; i < n; i++) {
    resultado += a;
    let sum: number = a + b;
    a = b;
    b = sum;
  }

  return resultado;
}


/* 4  */
/* DEVUELVE RESULTADO DE LA SERIE */

formulaGeneral(n : number){

  let resultadoT = 2*this.triangular(n);

  let resultadoP = (3) * this.devuelvePrimo(n);

  let resultadoF = this.fibonacci(n);

  let resultadoArriba = (resultadoT)*(resultadoP)
  if(resultadoArriba === 0){
    return 0;
  }else{

    let resultadoAbajo = (7)*(resultadoF)

    let resultado = resultadoArriba/resultadoAbajo;

    return resultado;

  }

}


}
