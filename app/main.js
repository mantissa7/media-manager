import { VehicleImages } from './modules/VehicleImages';
import { SmartImages } from './modules/SmartImages';
import { StandardImages } from './modules/StandardImages';
var App = (function () {
    function App() {
        var images = new VehicleImages([0]);
        var smart = new SmartImages();
        var stImg = new StandardImages();
    }
    return App;
}());
new App();
