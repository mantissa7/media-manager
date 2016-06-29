import { Env } from './modules/Env';
import { Ajax } from './modules/Ajax';
var VehicleImages = (function () {
    function VehicleImages(categories) {
        Ajax.get(Env.RESTURL + "api/vehicle/813177/images/1").then(function (data) {
            alert("something!");
        });
    }
    return VehicleImages;
}());
VehicleImages = VehicleImages;
