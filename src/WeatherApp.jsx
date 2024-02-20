import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WheatherApp (){
const [weatherInfo, setWeatherInfo] = useState(
    {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
        windSpeed: 1.03,
    }
);

let updateInfo = (Info)=>{
    setWeatherInfo(Info);
}

    return (
        <div style={{textAlign:"center"}}>
          <h2>Weather App by Delta</h2>  
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    )
}