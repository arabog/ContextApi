import React, { useContext } from 'react'

import { WeatherContext } from '../App'


const CityList = () => {
    const context = useContext(WeatherContext);


    return (
        <table className='city-list'>
            <thead>
                <tr>
                    <th> City </th>
                    <th> Temperature </th>
                </tr>
            </thead>

            <tbody>
                {
                    context.cities.map((city, index) => (
                        <tr key={city.name}>
                            <td> {city.name} </td>

                            <td> {city.temperature} </td>

                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}


export default CityList
