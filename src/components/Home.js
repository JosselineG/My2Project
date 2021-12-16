import React, {Component} from 'react';



class Home extends Component{
 
    constructor(){
        super()
        this.state = {City:" ", Location: " ", temperature: " "}

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
        this.setState({Location: City.name, temperature: City.main.temp })
        console.log(City)
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

                  

                    <button 
                        className= "bt" 
                        onClick={(e)=>this.handleSubmit(e)} 
                        >Submit</button>

                      </div>

                        <div className='LocationBox'>
                            <div className='location'>{this.state.Location}
                            </div>
                        </div>

                        <div className='WeatherBox'>
                        
                            <div className='temperature'>
                            
                                    {Math.round(((this.state.temperature-273.15)*1.8)+32)}
                            
                                
                                
                            </div>

                        </div>



    
                </div>
            )

        }
}

export default Home;