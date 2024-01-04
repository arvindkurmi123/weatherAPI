import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function MediaCard({info}) {
    let RAIN_URL = "/static/images/RAIN.jpg"
    let CLOUD_URL = "/static/images/CLOUD.jpg"
    let CLOUDY_URL = "/static/images/CLOUDY.jpg"
    let CLEAR_URL = "/static/images/CLEAR.jpg"
    let SUN_URL = "/static/images/SUN.jpg"

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
            ? RAIN_URL 
            : info.temp > 15
            ? SUN_URL
            : CLEAR_URL
        }
        title="weather image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80
            ? < ThunderstormIcon />
            : info.temp > 15
            ? < WbSunnyIcon />
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature: {info.temp}&deg;C</p>
           <p>Humidity: {info.humidity}</p>
           <p>Minimum Temperature: {info.tempMin}&deg;C</p>
           <p>Maximum Temperature: {info.tempMax}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
  );
}