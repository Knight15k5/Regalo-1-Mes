import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotaComponent } from './page/nota/nota/nota.component';
import { NotaListarComponent } from './page/nota/nota/nota-listar/nota-listar/nota-listar.component';
import { NotaCreaeditaComponent } from './page/nota/nota/nota-creaedita/nota-creaedita/nota-creaedita.component';
import { NotaBuscarComponent } from './page/nota/nota/nota-buscar/nota-buscar/nota-buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    NotaListarComponent,
    NotaCreaeditaComponent,
    NotaBuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
