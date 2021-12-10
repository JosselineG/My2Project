import React, {Component} from 'react';



class Home extends Component{
 
    constructor(){
        super()
        this.state = {value:" "}

    }

    handleChange=(e)=>{

        this.setState({value: e.target.value})
    
    }
    
    handleSubmit =(e)=>{
     
    fetch('api.openweathermap.org/data/2.5/weather?q='+ this.state.value + '&appid={85d5a26c992084f5c10991cdc6389f48}')
    .then(response => response.json())
    .then((data) => console.log(data))
    
}
 
  


        render(){
            return(
                <div className="home">
                    <h1>Weather</h1>

                    <div className='searchBox'>
                    <input type='text'
                        className="search-bar"
                        placeholder='Enter a city...'
                        value= { this.state.value}
                        onChange={(e)=>this.handleChange(e)}
                    />

                    <button 
                        className= "bt" 
                        type = 'submit'
                        onClick={(e)=>this.handleSubmit(e)} 
                        >Submit</button>

                      </div>


    
                </div>
            )

        }
}

export default Home;