import React, {Component} from 'react';



class Home extends Component{
 
    constructor(){
        super()
        this.state = {city:" ", country:" "}

    }

    handleChange=(e)=>{

        this.setState({value: e.target.value})
    
    }
    
    handleSubmit =(e)=>{
     
   
    
}
 
  


        render(){
            return(
                <div className="home">
                    <h1>Weather</h1>

                    <div className='searchBox'>
                    <input type='text'
                        className="search-bar"
                        placeholder='Enter a city...'
                    
                    />

                   <input type='text'
                        className="search-bar"
                        placeholder='Enter country...'
                       
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