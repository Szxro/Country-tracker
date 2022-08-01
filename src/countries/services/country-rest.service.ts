import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/countryResponse.interface'
import { CodeResponse } from '../interfaces/codeResponse.interface';
import { RegionResponse } from '../interfaces/regionResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryRestService {
  private _urlLink:string ='https://restcountries.com';
  private _params=new HttpParams()
  .set('fields','name,capital,flags,population,cca2');

  constructor(private _http:HttpClient) { }

  getData(arg:string):Observable<CountryResponse[]>{
    const data=`${this._urlLink}/v3.1/name/${arg}`;
    return this._http.get<CountryResponse[]>(data,{params:this._params})
  }

  getDataCapital(arg:string):Observable<CountryResponse[]>{
    const data=`${this._urlLink}/v3.1/capital/${arg}`;
    return this._http.get<CountryResponse[]>(data,{params:this._params});
  }
  getIdCountry(id:string):Observable<CodeResponse[]>{
    const data=`${this._urlLink}/v3.1/alpha/${id}`;
    return this._http.get<CodeResponse[]>(data);
  }

  getRegion(arg:string):Observable<CountryResponse[]>{
    const data=`${this._urlLink}/v3.1/region/${arg}`;
    return this._http.get<CountryResponse[]>(data,{params:this._params});
  }
}
