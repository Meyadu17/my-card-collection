import { Component, OnInit } from '@angular/core';
import { PostalCardService } from '../../postal-card.service';
import { Region } from '../../model/region';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  regionList: Region[];

  constructor(private router:Router, 
    private postalCardService: PostalCardService) {}

  ngOnInit(): void {
    this.regionList = this.postalCardService.getAllRegions();
  }

  goToRegionId(id:number){
    this.router.navigate(['/region', id]);
  }
}
