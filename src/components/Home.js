import React from 'react';
import Button from '@mui/material/Button'
import axios from "axios";
import { useState } from "react";
function Home() {


    //Declaring string values
    const [Info, setInfo] = useState({Location: '',Temperature: '',Description: '',Wind: '',Icons: '' });
    const [Name, setName] = useState({N:''});
 


    const handleChange = (e) => {

        e.preventDefault();

        setInfo({...Info, [e.target.name]: e.target.value })
        setName({...Name, [e.target.name]: e.target.value })
    
    }



    //The word “async” before a function means: a function always returns a promise.
    const handleSubmit = async (e) => {

        e.preventDefault();

        //The keyword await makes JavaScript wait until that promise settles and returns its result.
      
        await axios.post('http://localhost:5000/',Name) //posting new data from client to api server
   
            .then((response) => response)
            .catch(error => console.log(error));

          
        await axios.get('http://localhost:5000/api') //getting response/data from api sever which will return to client.

            .then((response) => {
                setInfo({Location: response.data.Lo,
                         Temperature: response.data.Te,
                         Description: response.data.De + "ºF",
                         Icons: <img alt="" src={`https://openweathermap.org/img/w/${response.data.Ic}.png`}/>, 
                         Wind: "wind: " + response.data.Wi + " mph",
                        })
            })
          //- this will alert the user when they insert the wrong input-
          .catch((error) => alert("Wrong input, try again! "));

    }

    return (
        <form className="home">
    
            <div className='searchBox'>

                <input type='text' required
                    className="search-bar"
                    name="N"
                    placeholder='Search City...  '
                    onChange={handleChange}
                    value={Name.N}
                   
                   
                />

                <Button
                    className="bt"
                    style={{ backgroundColor: 'black' }}
                    size="small"
                    variant='contained'
                    onClick={handleSubmit}
                >Submit
                </Button>

            </div>

            <div className='LocationBox'>
                <div className='location'>
                    {Info.Location}
                </div>
            </div>

            <div className='WeatherBox'>
                <div className='temperature'>
                    {Info.Temperature}
                    <div className='description'>
                        {Info.Description}{Info.Icons}
                    </div>

                    <div className='windspeed'>
                        {Info.Wind}
                    </div>

                </div>

            </div>

       
        </form>
    )


}

export default Home;



