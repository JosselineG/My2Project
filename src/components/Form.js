import React, {useState} from 'react';
import Button from '@mui/material/Button'
import PublishIcon from '@mui/icons-material/Publish';
import axios from "axios"; 

function Form(){
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

    }

  

        return(
            <form>
                <input
                 className='favInput'
                  type = "text" 
                  name= "City"
                  placeholder='Favorite City...  '
                  value = {info.City}
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
