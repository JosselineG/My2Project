import React from 'react';
import Button from '@mui/material/Button'
import axios from "axios"; 
import { useState } from "react";
function Home(){
 
   
        
        const [info, setInfo] = useState ({
        City:"", 
        Location: "", 
        temperature: "", 
        descr: "", 
        wind: "", 
        Icon: ""});

   

    const handleChange=(e)=>{

        e.preventDefault();
        setInfo({...info,[e.target.name]: e.target.value})
    
    }
    


    
    const handleSubmit = async (e)=>{

        e.preventDefault();
  
        
      
      await axios.post('http://localhost:5000/',info) //posting new data from client to apiserver
    
   
        .then(function(response){
                console.log(response)
             
            }) 
        
        .catch(function(error) {
                console.log(error);
            });


       /*   fetch('http://localhost:5000/api')
        
        .then(response => response.json())
        
        
        .then((data) => setInfo({Location:  data.name, temperature: Math.round((data.main.temp-273.15)*1.8+32)+"ºF", descr: data.weather[0].description, Icon: <img alt="" src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />, wind: "wind: "+ Math.round((data.wind.speed) * 2.236936) + " mph"}))
        
        .catch((error)=> alert("Incorrect City, Try Again!" + error))
         */
 
}
        
            return(
                <div className="home">
                    
                    <div className='searchBox'>
                    
                    <input type='text'
                        className="search-bar"
                        name="City"
                        placeholder='Search City...  '
                        onChange = {handleChange}
                        value= {info.City}
                    
                    />

                    <Button 
                        className= "bt"
                        style={{backgroundColor: 'black'}} 
                        size = "small" 
                        variant='contained' 
                        onClick={handleSubmit} 
                        >Submit
                    </Button>

                    </div>

                        <div className='LocationBox'>
                            <div className='location'>
                                {info.Location}
                            </div>
                        </div>

                        <div className='WeatherBox'>
                            <div className='temperature'>                                      
                                    {info.temperature}
                            <div className= 'description'>
                                    {info.descr}{info.Icon}
                            </div>

                            <div className= 'windspeed'>
                                    {info.wind}
                            </div>
                                
                            </div>

                        </div>

                </div>
            )

        
}

export default Home;