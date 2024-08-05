import { Component, OnInit } from '@angular/core';
import { PostalCardService } from './postal-card.service';
import { Region } from './model/region';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  test:string ="";
  regionList: Region[];
  selectedTab: number;

  constructor(private postalCardService: PostalCardService) {}

  ngOnInit(): void {
    this.regionList = this.postalCardService.getAllRegions();
  }

  goToListCard(test:string){
    console.log("test");
  }

  selectTab(tabId: number) {
    this.selectedTab = tabId;
  }

}
