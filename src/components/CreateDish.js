import React, { Component } from 'react';
import CreateDishForm from './CreateDishForm';
class CreateDish extends Component {
  componentWillMount() {
    this.props.loadIngridients()
    }
    
  render() {
    const {createDish, ingridients} = this.props;
    const {id} = this.props.location.query;
    let styles = {
      display: "flex",
      flexDirection: "column",
      margin: "1em",
      padding: "1em",
      border: "1px solid black"
    }

    return (
      <div style={styles}>
      <CreateDishForm formHandler={createDish} ingridients={ingridients.list} dishParent={id}/> 
     </div>
    )
  }
};

export default CreateDish;
