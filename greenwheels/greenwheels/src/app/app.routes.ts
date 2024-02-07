import { Routes } from '@angular/router';
import { VehicleRecommenderComponent } from './vehicle-recommender/vehicle-recommender.component';
import { EmissionMapComponent } from './emission-map/emission-map.component';
import { EmissionRateComponent } from './emission-rate/emission-rate.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutDevsComponent } from './about-devs/about-devs.component';


export const routes: Routes = [
    { 
        path: "vehicle-recommender" , 
        component: VehicleRecommenderComponent,
        title: "Vehicle Recommender" 
    },
    { 
        path: "emission-map" , 
        component: EmissionMapComponent,
        title: "Emission Map"
    },
    {
        path:"Login-Sign-up-page",
        component: LoginPageComponent,
        title: "Login/Sign Up"
    },
    {
        path:"emission-rate",
        component: EmissionRateComponent,
        title: "CO2-Rate"
    },
    {
        path:"About-Devs",
        component: AboutDevsComponent,
        title: "GreenWheels-Devs"
    }
];
