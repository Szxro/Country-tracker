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
  arrSuggestion:CountryResponse[]=[];
  sugg:boolean=false;

  constructor(public countryRest:CountryRestService) { }
  
  search(arg:string):void{
   if(!arg) return;
   this.value=arg;
   this.sugg=false;
   this.countryRest.getData(arg)
   .subscribe((country)=>{
    this.countries=country;
    this.error=true;
   },(err)=>this.error=false);
  }

  suggestions(term:string){
    this.sugg=true;
    this.error = true;
    this.value=term;
    this.countryRest.getData(term)
    .subscribe(resp => this.arrSuggestion = resp.slice(0,5),(err)=>this.arrSuggestion=[]);
  }

}
