import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GepComponent } from './gep/gep.component';
import { ListaComponent } from './lista/lista.component';
import { MunkaComponent } from './munka/munka.component';
import { MunkasComponent } from './munkas/munkas.component';

const routes: Routes = [
  {
    path: "gepek",
    component: GepComponent
  },
  {
    path: "munkak",
    component: MunkaComponent
  },
  {
    path: "munkasok",
    component: MunkasComponent
  },
  {
    path: "listak",
    component: ListaComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
