import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/countries/interfaces/countryResponse.interface';
import { CountryRestService } from '../../services/country-rest.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  error:boolean=true;
  value:string='';
  countriesCapital:CountryResponse[]=[];

  constructor(private countryService:CountryRestService) { }

  search(arg:string){
    if(!arg) return;
    this.value=arg;
    this.countryService.getDataCapital(arg)
    .subscribe((capital)=>{
      this.countriesCapital=capital
      this.error=true;
    },((err)=>this.error=false))
  }
}
