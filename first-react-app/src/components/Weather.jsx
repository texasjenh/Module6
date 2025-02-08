import { useState } from "react";

// ****REACT DATA FLOW - LIFTING STATE UP - SLIDE 66****
function Weather() { 
    
    // 2 seperate state values to store data
    const [weather, setWeather] = useState('sunny')
    const [tempCelcius, setTempCelcius] = useState(27)

    // handler function to update both values at once
    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather)
        setTempCelcius(newTemp)
    }
    
    return (
        <div className='Weather componentBox'>
            <h2>Today's Weather</h2>
            <div>
                {/* child component to display temp - needs temp value as prop */}
                <strong>{weather}</strong> with a temp of                
                <Temperature temp={tempCelcius} units="C" />
            </div>
            {/* child component to update weather - needs handler function as prop */}
            <CheckWeather onWeatherChange={handleWeatherChange} />
    
        </div>
    )
}
// child component - receives parent state handler via props
function CheckWeather(props) {
    const weatherTypes = ['sunny', 'windy', 'rainy', 'foggy', 'cloudy'];

    // generates new random weather data and updates state via prop
    const randomWeather = () => {
        let newTemp = Math.floor(Math.random() * 40);
        let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
        props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp)
    }

    return (
        <button onClick={randomWeather}>Check Weather</button>
    )
}

function Temperature({temp, units = 'C'}) {
    let displayTemp = units === 'C' ? temp : (temp * 9/5) + 32

    return (
        <span class="Temperature">
            <strong> {parseInt(displayTemp)}&deg;{units} </strong>
        </span>
    )
}

export default Weather
   