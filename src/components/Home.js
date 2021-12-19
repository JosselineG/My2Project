import React, {Component} from 'react';
import Button from '@mui/material/Button'

class Home extends Component{
 
    constructor(props){
        super(props)
        this.state = {City:" ", Location: " ", temperature: " ", descr: " ", wind: " ", Icon: " "}

    }

    handleChange=(e)=>{

        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    
    }
    
    handleSubmit =(e)=>{
     
        e.preventDefault();
        console.log("in handlesubmit")
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.City  + '&appid=' + process.env.REACT_APP_OPEN_WEATHER_API_KEY)
        .then(response => response.json())
        .then((City) => {
        this.setState({Location: City.name, temperature: Math.round((City.main.temp-273.15)*1.8+32)+"ºF", descr: City.weather[0].description, Icon: <img alt="" src={`http://openweathermap.org/img/w/${City.weather[0].icon}.png`} />, wind: "wind: "+ Math.round((City.wind.speed) * 2.236936) + " mph"})
        
     })
     .catch((error)=> {
        alert("Incorrect City, Try Again!");
    })
      
      
}
 
        render(){
            return(
                <div className="home">
                    
                    <div className='searchBox'>
                    
                    <input type='text'
                        className="search-bar"
                        name="City"
                        placeholder='Search City...  '
                        onChange = {(e)=>this.handleChange(e)}
                    
                    />

                    <Button 
                        className= "bt"
                        style={{backgroundColor: 'black'}} 
                        size = "small" 
                        variant='contained' 
                        onClick={(e)=>this.handleSubmit(e)} 
                        >Submit
                    </Button>

                    </div>

                        <div className='LocationBox'>
                            <div className='location'>
                                {this.state.Location}
                            </div>
                        </div>

                        <div className='WeatherBox'>
                            <div className='temperature'>                                      
                                    {this.state.temperature}
                            <div className= 'description'>
                                    {this.state.descr}{this.state.Icon}
                            </div>

                            <div className= 'windspeed'>
                                    {this.state.wind}
                            </div>
                                
                            </div>

                        </div>

                </div>
            )

        }
}

export default Home;