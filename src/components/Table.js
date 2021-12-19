import React from 'react'

const TableHeader = () => { 
    
    
       
    return (
        
      
        <thead>
            <tr>
                <th>City |</th>
                <th>Temperature |</th>
                <th>Description |</th>
                <th>Wind</th>
            </tr>
        </thead>
    );
} 

 const TableBody = (props) => { 
           

    const rows =  props.favData.map((row, index) => {
                   
        return(
            <tr key={index}>

                         
                <td>{row.City}</td>
                <td> {row.temperature}</td>
                <td>{row.descr}</td>
                <td> {row.wind}</td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
               
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