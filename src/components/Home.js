import React, {Component} from 'react';



class Home extends Component{
 
    constructor(){
        super()
        this.state = {CityState:" "}

    }

    handleChange=(e)=>{

        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    
    }
    
    handleSubmit =(e)=>{
     
        
    
        e.preventDefault();
        console.log("in handlesubmit")
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.CityState + '&appid=' + process.env.REACT_APP_OPEN_WEATHER_API_KEY)
        .then(response => response.json())
        .then((data) => console.log(data))

    
    
}
 
   
  


        render(){
            return(
                <div className="home">
                    <div className='heading'>
                    <h1>Weather</h1>

                    </div>
                    


                 
                    <div className='searchBox'>
                    
                    <input type='text'
                        className="search-bar"
                        name="CityState"
                        placeholder='City and State... Atlanta,Georgia'
                        onChange = {(e)=>this.handleChange(e)}
                    
                    />

                  

                    <button 
                        className= "bt" 
                        type = 'submit'
                        onClick={(e)=>this.handleSubmit(e)} 
                        >Submit</button>

                      </div>


                        <div className='WeatherBox'>


                        </div>



    
                </div>
            )

        }
}

export default Home;