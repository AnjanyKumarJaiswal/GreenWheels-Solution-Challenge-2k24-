import { Routes } from '@angular/router';
import { VehicleRecommenderComponent } from './vehicle-recommender/vehicle-recommender.component';
import { EmissionMapComponent } from './emission-map/emission-map.component';


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
    }
];
