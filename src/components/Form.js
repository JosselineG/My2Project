import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {City:"", Location: " ", temperature: " ", descr: " ", wind: " "};


    }

    handleChange = (e) => {
        
       // prevent page reloads form event
       e.preventDefault(); 

        this.setState({[e.target.name] : e.target.value})
         // update the state everytime the form changes
        
      
    }

    onFormSubmit = (e) => {

        // to prevent page reload on form submit
        e.preventDefault();

        fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.City  + '&appid=' + process.env.REACT_APP_OPEN_WEATHER_API_KEY)
        .then(response => response.json())
        .then((City) => {
        this.setState({Location: City.name, temperature: Math.round((City.main.temp-273.15)*1.8+32)+"ºF", descr: City.weather[0].description, wind: "wind: "+ Math.round(City.wind.speed * 2.236936) + "mph"})
        
        let newerLink = {City: this.state.City, temperature: this.state.temperature, descr: this.state.descr, wind: this.state.wind };
        this.props.onNewSubmit(newerLink);
        
       // calls the callback function from Favorites and sends data from state
     })
     .catch((error)=> {
        alert("Incorrect city, try again!");
    })
        
       
       // calls the callback function from Favorites and sends data from state
   
    

    }

    render() {

        return(
            <form>
               
                <input
                  type = "text" 
                  name= "City"
                  placeholder='Favorite City...  '
                  value = {this.state.City}
                  
                  onChange = {(e)=>this.handleChange(e)}
                />
                 
                
                 <button type="submit" onClick= {((e)=>this.onFormSubmit(e))}>Submit</button>
                
           
            </form>
              
                
        )
        
    }
}

export default Form;
