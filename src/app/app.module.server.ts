import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { AccueilComponent } from './postal-card/accueil/accueil.component';

const routes: Routes = [
  { path:'accueil', component:AccueilComponent}
];
@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
