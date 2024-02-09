import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import {useState} from 'react'
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp : 14,
        tempMin: 33,
        tempMax: 35,
        weather: "Haze",
        feelsLike: 33.3,
        humidity: 81
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Wheather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}