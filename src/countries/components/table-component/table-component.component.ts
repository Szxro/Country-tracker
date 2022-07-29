import { Component, Input, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html'
})
export class TableComponentComponent {

  @Input('data')countries:CountryResponse[]=[];

  constructor() { }



}
