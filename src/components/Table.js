import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';

const TableHeader = () => { 
       
    return (
           
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Description</th>
                <th>Wind</th>
            </tr>
        </thead>
    );
} 

 const TableBody = (props) => { 
           

    const rows =  props.favData.map((row, index) => {
                   
        return(
                      
            <tr key={index}>
                <td>{row.Location}</td>
                <td> {row.Temperature}</td>
                <td>{row.Description}</td>
                <td> {row.Wind}</td>
                <td><Button 
                    variant='contained' 
                    style={{backgroundColor:'rgb(16, 76, 102'}} 
                    onClick={() => props.removeLink(index)}>
                    <DeleteIcon fontSize='medium'/>
                </Button></td>
            </tr>
        )
    })
           
                return <tbody>{rows}</tbody>;

}
    

const Table = (props) => {
    const { favData, removeLink} = props;
   
    return (
    
        <table>

          <TableHeader />
          <TableBody  favData = {favData} removeLink = {removeLink}/>
       
        </table>     
    )
      
  }




export default Table;