import {Env} from './modules/Env';
import {Ajax} from './modules/Ajax';

export class VehicleImages{

    public constructor(categories: number[]){
        Ajax.get(Env.RESTURL+"api/vehicle/813177/images/1").then(function(data){
            alert("something!");
        });
    }

}