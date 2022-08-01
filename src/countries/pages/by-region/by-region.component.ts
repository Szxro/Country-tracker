import { Component, OnInit } from '@angular/core';
import { CountryRestService } from '../../services/country-rest.service';
import { RegionResponse } from '../../interfaces/regionResponse.interface';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  regions:string[]=["africa", "americas", "asia", "europe", "oceania"];
  activeRegion:string='';
  arrRegion:CountryResponse[]=[];

  constructor(private regionRest:CountryRestService) { }

  getRegion(region:string):void{
    if(region === this.activeRegion) return;
    this.activeRegion=region;
    this.regionRest.getRegion(region)
    .subscribe(resp =>{
      this.arrRegion=resp;
    });
  }

  addClass(region:string):string{
    return (this.activeRegion === region) ? 'btn btn-primary': ' btn btn-outline-primary';
  }
}
