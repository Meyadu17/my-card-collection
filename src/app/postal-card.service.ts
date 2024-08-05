import { Injectable } from '@angular/core';
import { AUVERGNE_RHONE_ARLES, BOUGOGNE_FRANCHE_COMTE, REGION } from './postal-card/mocks';
import { Region } from './model/region';

@Injectable({
  providedIn: 'root'
})
export class PostalCardService {
  
  constructor() { }

  getAllRegions(): Region[]{
    return REGION;
  }
}
