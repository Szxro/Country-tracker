import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/countryResponse.interface'
import { CodeResponse } from '../interfaces/codeResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryRestService {
  private _urlLink:string ='https://restcountries.com';

  constructor(private _http:HttpClient) { }

  getData(arg:string):Observable<CountryResponse[]>{
    const data=`${this._urlLink}/v3.1/name/${arg}`;
    return this._http.get<CountryResponse[]>(data)
  }

  getDataCapital(arg:string):Observable<CountryResponse[]>{
    const data=`${this._urlLink}/v3.1/capital/${arg}`;
    return this._http.get<CountryResponse[]>(data);
  }
  getIdCountry(id:string):Observable<CodeResponse[]>{
    const data=`${this._urlLink}/v3.1/alpha/${id}`;
    return this._http.get<CodeResponse[]>(data);
  }
}
