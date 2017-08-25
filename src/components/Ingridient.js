import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
class Ingridient extends Component {
  shouldComponentUpdate(prevProps, nextProps) {
    if(prevProps !== nextProps) return true
    return false
  } 
  render() {
    let styles = {
      padding: "0 0.5em 0 1em",
      border: "1px dashed green"
    }
    const { _id, name, createdAt, updatedAt, calories, deleteIngridient } = this.props;
    return (
      <div style={styles}>
        <Link to={`/ingridients/show/${_id}`}> edit </Link>
        <button onClick={()=> deleteIngridient(_id)}> Delete </button>
        <div> 
          <p>Name:</p>
          <h2>{name}</h2>
        </div>
        <div> 
          <p>Calories:</p>
          <h2>{calories}</h2>
      </div>
      <div> 
        <p>CreatedAt:</p>
        <h2>{moment(createdAt).format('llll')}</h2>
      </div>
      <div> 
        <p>updatedAt:</p>
        <h2>{moment(updatedAt).format('llll')}</h2>
  </div>
     </div>
    )
  }
};

export default Ingridient;
