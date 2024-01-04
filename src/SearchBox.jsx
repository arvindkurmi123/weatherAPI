import { TextField } from "@mui/material";
import {useState} from 'react';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e8756e566327fcc5a4095c975e2947d2";
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let getWeatherinfo = async ()=>{
        try{
            let info = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=matric`);
            let jsonInfo = await info.json();
            console.log(jsonInfo);
            let result = {
                city: city,
                temp : jsonInfo.main.temp.toFixed(2) - 273.15,
                tempMin : jsonInfo.main.temp_min.toFixed(2) - 273.15,
                tempMax : jsonInfo.main.temp_max.toFixed(2) -273.15,
                humidity : jsonInfo.main.humidity,
                feelsLike: jsonInfo.main.feels_like.toFixed(2) - 273.15,
                weather : jsonInfo.weather[0].description
            }
            return result;
        }catch(err){
            throw err;
            return {};
        }
        
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherinfo();
            updateInfo(newInfo);
        } catch(err){
            setErr(true);
        }
        
    }
    

    return (
        <div className="SearchBox" >
            {/* <h1>Search for the weather</h1> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
                {err && <p style={{color: "red"}}>No such place exist or slow internet!</p> }
            </form>
            
        </ div>
    )
}