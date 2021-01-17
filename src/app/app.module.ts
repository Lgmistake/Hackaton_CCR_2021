import { EditContractComponent } from "./contract/edit-contract/edit-contract.component";
import { FindContractComponent } from "./contract/find-contract/find-contract.component";
import { ErrorKeyModule } from "./../shared/error-key/error-key.module";
import { NumbersOnlyDirective } from "./config/numbers-only.directive";
import { AddNewContractComponent } from "./contract/new-contract/add-new-contract/add-new-contract.component";
import { DialogComponent } from "src/shared/dialogs/dialog/dialog.component";
import { LoaderComponent } from "./../shared/loader/loader.component";
import { LoaderService } from "./../shared/loader/loader.service";
import { InterceptorModule } from "./config/interceptor.module";
import { CardModule } from "./../shared/card/card.module";
import { AngularMaterialModule } from "./../shared/angular-material/angular-material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContractComponent } from "./contract/contract.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatCardModule,
  MatStepperModule,
  MatInputModule
} from "@angular/material";

import { MyContractComponent } from "./contract/my-contract/my-contract.component";
import { NewContractComponent } from "./contract/new-contract/new-contract.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { QuillModule } from "ngx-quill";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HieraquiaContratoComponent } from "./contract/new-contract/hieraquia-contrato/hieraquia-contrato.component";
import { ViewContractComponent } from "./contract/view-contract/view-contract.component";
import { RegistroComponent } from './busca/registro.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SobreComponent } from './sobre/sobre.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { ContatoComponent } from './contato/contato.component';
import { HeaderComponent } from './header/header.component';
import { InicialComponent } from './inicial/inicial.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registro/register.component'
import { PoliticaComponent } from './politica/politica.component';
import { StorageService } from './sobre/storage.service';



@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    MyContractComponent,
    NewContractComponent,
    FindContractComponent,
    LoaderComponent,
    DialogComponent,
    AddNewContractComponent,
    EditContractComponent,
    NumbersOnlyDirective,
    HieraquiaContratoComponent,
    ViewContractComponent,
    RegistroComponent,
    RegisterComponent,
    FooterComponent,
    SobreComponent,
    SolucoesComponent,
    ContatoComponent,
    HeaderComponent,
    InicialComponent,
    LoginComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    CardModule,
    MatToolbarModule,
    InterceptorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    QuillModule.forRoot(),
    ErrorKeyModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  providers: [
    StorageService,
    LoaderService, { provide: MAT_DATE_LOCALE, useValue: "pt-br" }
  ],
  entryComponents: [
    DialogComponent,
    AddNewContractComponent,
    NewContractComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
