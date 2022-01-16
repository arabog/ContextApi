import React, { useContext, useState } from 'react'

import { WeatherContext } from '../App'


const AddCityButton = () => {
          const context = useContext(WeatherContext);

          const [name, setName] = useState();

          const handleSubmit = () => {
                    context.addCity(name, Math.ceil(Math.random() * 10));

                    setName("");
          }


          return (
                    <div className='add-city-form'>
                              <input
                                        className='input'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                              />

                              <button className='input' onClick={handleSubmit}>
                                        Add
                              </button>
                              
                    </div>
          )
}


export default AddCityButton
