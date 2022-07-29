import { Component } from '@angular/core';
import { CountryRestService } from '../../services/country-rest.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styles: [
  ]
})
export class ByCountriesComponent {
  error:boolean=true;
  value:string='';
  countries:CountryResponse[]=[];

  constructor(public countryRest:CountryRestService) { }
  
  search(arg:string):void{
   if(!arg) return;
   this.value=arg;
   this.countryRest.getData(arg)
   .subscribe((country)=>{
    this.countries=country;
    this.error=true;
   },(err)=>this.error=false);
  }

  suggestions(term:string){
    this.error = true;
  }

}
