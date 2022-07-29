import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCountriesComponent } from '../countries/pages/by-countries/by-countries.component';
import { ByCapitalComponent } from '../countries/pages/by-capital/by-capital.component';
import { ByRegionComponent } from '../countries/pages/by-region/by-region.component';
import { SeeCountryComponent } from '../countries/pages/see-country/see-country.component';

const routes:Routes=[
    {
        path:'',
        component:ByCountriesComponent,
        pathMatch:"full"
    },
    {
        path:'capital',
        component:ByCapitalComponent,
    },
    {
        path:'region',
        component:ByRegionComponent,
    },
    {
        path:'country/:id',
        component:SeeCountryComponent
    },
    {
        path:'**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class appModuleRouting{

}