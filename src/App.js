import React, { useState , useReducer } from "react";
import { useEffect } from "react";

import CityCard from "./CityCard.jsx"

import "./App.css"
import SearchIcon from "./search.svg"
// import thumbnail from "./city_pic.png"





const Appfunc =  () =>  { 
        // const apikey = "fd8451f6faf82427d680c1f9b37f7b16" ; 
        const WeatherFromLoc_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=fd8451f6faf82427d680c1f9b37f7b16"
        // Use the following to get co-ordinates from city name
        const LocFromName_URL = "http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=fd8451f6faf82427d680c1f9b37f7b16"
        
        let city_name = "ladakh" ;

        const city1 = {
                "Name" : {city_name}, 
                "Temperature": 18.99,
                "Humidity": 55,
                "Description": "haze",
                "Latitude": "21.15",
                "Longitude": "79.08"
        };

        let [cities, setCities] = useState(city1); 
        let [searchTerm , setSearchTerm] = useState (city_name)

        const getWeatherFromName = async (city_name) => {

                // get co-ordinates from location name
                let response = await fetch ( `${LocFromName_URL}&q=${city_name}`) ;
                let data = await response.json() ;
                console.log("free fire" , data)
                if ( data.length == 0 ) { 
                        alert ( "No Such City")
                        // setCities ( {"Name" : city_name  , "Description" : "NOT FOUND"})
                }
                else {
                        const latitude = data[0].lat ; 
                        const longitude = data[0].lon ;

                        // get weather details from co-ordinates
                        console.log ( `${WeatherFromLoc_URL}&lat=${latitude}&lon=${longitude}`  )
                        
                        response = await fetch ( `${WeatherFromLoc_URL}&lat=${latitude}&lon=${longitude}`) ;
                        data = await response.json() ;
                        // console.log ( data )
                        
                        const temperature = data["main"]["temp"];
                        const humidity = data["main"]["humidity"];
                        const description = data["weather"][0]["description"];
                        console.log ( "pubg" , {
                                "Name"  : city_name ,
                                "Temperature" : temperature, 
                                "Humidity" : humidity ,
                                "Description" :  description,
                                "Latitude" : latitude , 
                                "Longitude" : longitude 
                        } );

                        setCities ( 
                                {
                                        "Name"  : city_name ,
                                        "Temperature" : temperature, 
                                        "Humidity" : humidity ,
                                        "Description" :  description,
                                        "Latitude" : latitude , 
                                        "Longitude" : longitude 
                                } 
                        
                        );
                }
                        
        } ;
                
                
        useEffect ( ( ) =>  {  getWeatherFromName ( city_name ) } , [ ])
        // useEffect ( ( ) =>  {  getWeatherFromName ( city_name ) } , [ ])
        
        
        return ( 
                <div className="app">
                        <h1> Weather-Mate</h1>

                        <div className="search">
                                <input
                                placeholder="Search for Cities"
                                value = {searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                />

                        
                                <img
                                src = {SearchIcon}
                                alt = "search"
                                onClick={() => getWeatherFromName(searchTerm)}
                                />
                        </div>

                        
                        <div className="container">  <CityCard city = {cities} /> </div>
                                
                        
                </div>
        ); 
}

export default Appfunc ; 