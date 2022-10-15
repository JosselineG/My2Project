import React from 'react';
import Button from '@mui/material/Button'
import axios from "axios";
import PublishIcon from '@mui/icons-material/Publish';
import { useState } from "react";
function Form() {


    //Declaring string values
    const [Info, setInfo] = useState({Location: '',Temperature: '',Description: '',Wind: ''});
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


        return(
            <form>
                <input
                 className='favInput'
                  type = "text" 
                  name= "N"
                  placeholder='Favorite City...  '
                  value = {Name.N}
                  onChange = {handleChange}
                />
                 
                
                <Button 
                 style={{backgroundColor: 'black'}}
                 endIcon={<PublishIcon/>} 
                 size = "small" 
                 type="submit" 
                 variant='contained' 
                 onClick= {handleSubmit}>Submit
                </Button>
                
           
            </form>
              
                
        )
        
    }


export default Form;
