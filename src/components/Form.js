import React, {Component} from 'react';
import Button from '@mui/material/Button'
import PublishIcon from '@mui/icons-material/Publish';
import * as dotenv from 'dotenv'

dotenv.config()

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {City:"", Location: " ", temperature: " ", descr: " ", wind: " "};


    }

    handleChange = (e) => {
        
       // prevent page reloads form event
       e.preventDefault(); 

       // update the state everytime the form changes
       this.setState({[e.target.name] : e.target.value})

    }
    onFormSubmit = (e)=>{

        e.preventDefault();

       fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.City  + '&appid=' + process.env.REACT_APP_OPEN_WEATHER_API_KEY)
        .then(response => response.json())
        .then((City) => {
        this.setState({Location: City.name, temperature: Math.round((City.main.temp-273.15)*1.8+32)+"ºF", descr: City.weather[0].description, wind: Math.round(City.wind.speed * 2.236936) + "mph"})
        
        let newerLink = {City: this.state.City, temperature: this.state.temperature, descr: this.state.descr, wind: this.state.wind };
        this.props.onNewSubmit(newerLink);
        
       // calls the callback function from Favorites and sends data from state
     })
     .catch((error)=> {
        alert("Incorrect City, Try Again!");
    })
        

    }

    render() {

        return(
            <form>
                <input
                 className='favInput'
                  type = "text" 
                  name= "City"
                  placeholder='Favorite City...  '
                  value = {this.state.City}
                  onChange = {(e)=>this.handleChange(e)}
                />
                 
                
                <Button 
                 style={{backgroundColor: 'black'}}
                 endIcon={<PublishIcon/>} 
                 size = "small" 
                 type="submit" 
                 variant='contained' 
                 onClick= {((e)=>this.onFormSubmit(e))}>Submit
                </Button>
                
           
            </form>
              
                
        )
        
    }
}

export default Form;
