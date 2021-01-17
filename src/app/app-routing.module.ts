import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import { RegistroComponent } from "./busca/registro.component";
import { RegisterComponent } from "./registro/register.component";
import { ViewContractComponent } from "./contract/view-contract/view-contract.component";
import { EditContractComponent } from "./contract/edit-contract/edit-contract.component";
import { ContractComponent } from "./contract/contract.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobreComponent } from './sobre/sobre.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { ContatoComponent } from './contato/contato.component';
import { PoliticaComponent } from './politica/politica.component';

const routes: Routes = [
  {
    path: "contract",
    component: ContractComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "edit/:id",
    component: EditContractComponent
  },
  {
    path: "view/:id",
    component: ViewContractComponent
  },
  {
    path: "registroCnpj",
    component: SobreComponent
  },
  {
    path: "solucoes",
    component: SolucoesComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "",
    component: InicialComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"politica",
    component:PoliticaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
