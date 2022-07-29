import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountriesComponent } from './pages/by-countries/by-countries.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { InputComponentComponent } from './components/input-component/input-component.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountriesComponent,
    ByRegionComponent,
    SeeCountryComponent,
    TableComponentComponent,
    InputComponentComponent
  ],
  exports:[
    ByCapitalComponent,
    ByCountriesComponent,
    ByRegionComponent,
    SeeCountryComponent,
    TableComponentComponent,
    InputComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
