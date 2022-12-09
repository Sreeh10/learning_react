import React from "react" ;

const CityCard = ( {city}) => { 

        return ( 

        <div className="city">

                

                <div >
                        <p> { city.Temperature} °C </p>
                        {/* <p> { city.Humidity} </p> */}
                </div>
                <div>
                        <img src  = "https://via.placeholder.com/1x1"/>
                </div>

                <div>
                        <h3> {city.Name}</h3>
                        <span>
                                status : {city.Description}
                        </span>
                </div>

        </div>


        );
}


export default CityCard ;

