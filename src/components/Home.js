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
     
        e.preventdefault()
    }
 
    
    componentDidMount(){

    fetch('api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={85d5a26c992084f5c10991cdc6389f48}')
    .then(response => response.json())
    .then((data) => console.log(data))

    }


        render(){
            return(
                <div className="home">
                    <h1>Home Weather</h1>

                    <div className='searchBox'>
          <input type='text'
          className="search-bar"
          placeholder='Enter a city...'/>

          <button className= "bt" type = 'submit'>Submit</button>

        </div>


    
                </div>
            )

        }
}

export default Home;