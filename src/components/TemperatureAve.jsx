import React, { useContext } from 'react';

import { WeatherContext } from '../App';


const TemperatureAve = () => {
    const context = useContext(WeatherContext);

    if(context.cities.length === 0) {
        return (
            <div>
                Add some cities to their average temperatures.
            </div>
        )
    };

    let total = 0;

    for (let city of context.cities) {
        total += city.temperature;
    };

    const avg = total / context.cities.length;


    return (
        <div>
            The average is <b> {avg.toFixed(2)} degrees Fahrenheight </b>
        </div>
    )
}


export default TemperatureAve
