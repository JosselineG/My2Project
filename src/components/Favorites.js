import Table from './Table';
import React from 'react';
import Form from './Form';

class Favorites extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {favorites: [] }
    }
  
    handleRemove = (index) => {
  
      const favoritesdeleted = this.state.favorites;
      favoritesdeleted.splice(index, 1);  
      this.setState({favorites: favoritesdeleted})
    
    }
  
 
  
    handleSubmit = (favorite) => {
  
      let oldData = this.state.favorites
      this.setState({favorites: [...oldData, favorite]})
     
    }
  
  
  
    render() {
      return (
        <div className="container">
            <div className='contHeader'>
          <h1>Favorites</h1>
          </div>
          <div className='cont'>
            <p>Save Temperature of Favorite City</p>
          
          <Table favData = {this.state.favorites} removeLink = {this.handleRemove} />
            
          <br />        

          <Form onNewSubmit = {this.handleSubmit}/>
          </div>
        </div>
      )
    }
  }







export default Favorites;