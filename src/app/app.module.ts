import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LunettesComponent } from './lunettes/lunettes.component';
import { AddLunetteComponent } from './add-lunette/add-lunette.component';
import { FormsModule } from '@angular/forms'; 
import { UpdateLunetteComponent } from './update-lunette/update-lunette.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParStyleComponent } from './recherche-par-style/recherche-par-style.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [  // Use plain array for declarations
    AppComponent,
    LunettesComponent,
    AddLunetteComponent,
    UpdateLunetteComponent,
    RechercheParStyleComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [  // Use plain array for imports
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule // Make sure RouterModule is imported correctly here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
