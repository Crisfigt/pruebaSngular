import { FormulaComponent } from './components/formula/formula.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';




@NgModule({

  imports: [
  RouterModule.forRoot([
    {path: 'formulario', component: FormularioComponent},
   { path: '**', pathMatch: 'full', redirectTo: 'formulario' },

  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
