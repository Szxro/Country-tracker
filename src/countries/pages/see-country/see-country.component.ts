import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryRestService } from '../../services/country-rest.service';
import {switchMap,tap} from 'rxjs/operators'
import { CodeResponse } from '../../interfaces/codeResponse.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {
  codeCountry!:CodeResponse;
  data:boolean=true;

  constructor(
    private _activeRoute:ActivatedRoute,
    private _serviceId:CountryRestService
    ) { }

  ngOnInit(): void {
    this._activeRoute.params
    .pipe(
      switchMap(({id})=> this._serviceId.getIdCountry(id)),
      tap(console.log) // When it past to this point is going to execute this. resp=> console.log(resp)
    ).subscribe(resp => {
      this.data=true;
      this.codeCountry=resp[0];
    },(err)=>this.data=false);
    // this._activeRoute.params.subscribe(({id}) => {
    //   console.log(id);
    //   this._serviceId.getIdCountry(id)
    //   .subscribe((e)=>console.log(e))
    // })
  }

}
