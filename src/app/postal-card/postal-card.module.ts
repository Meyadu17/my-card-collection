import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { PostalCardService } from '../postal-card.service';
import { RouterModule, Routes } from '@angular/router';

const cartePostaleRoutes: Routes = [
  { path:'accueil', component: AccueilComponent}
];

@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartePostaleRoutes)
  ],
  providers: [
    PostalCardService
  ]
})
export class PostalCardModule { }
