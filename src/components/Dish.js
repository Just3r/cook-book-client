import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import Ingridient from './Ingridient';
class Dish extends Component {
  shouldComponentUpdate(prevProps, nextProps) {
    if(prevProps !== nextProps) return true
    return false
  } 
  renderDishes(){
    const {children,deleteDish,deleteIngridient} = this.props;
    if(!children || !children.length){
        return false;
    }
    return children.map(p => <Dish key={p._id} {...p} deleteIngridient={deleteIngridient} deleteDish={deleteDish}/>)
}
  render() {
    const { _id, name, createdAt, updatedAt, ingridients, deleteDish, deleteIngridient } = this.props;
    let dishStyles = {
      display: "flex",
      flexDirection: "column",
      margin: "1em",
      padding: "1em",
      border: "1px solid black"
    }
    return (
      <div style={dishStyles}>
        <Link to={`/dishes/show/${_id}`}> edit </Link>
        <button onClick={()=> deleteDish(_id)}> Delete </button>
        <Link to={'/dishes/create'} query={{id:_id}}> Add a child recipe </Link>
        <div> 
           <p>Name:</p>
           <h2>{name}</h2>
        </div>
       <div> 
          <p>CreatedAt:</p>
          <h2>{moment(createdAt).format('llll')}</h2>
       </div>
       <div> 
          <p>updatedAt:</p>
          <h2>{moment(updatedAt).format('llll')}</h2>
       </div>
       <div>
         {ingridients.length > 0 ? <h3> Ingridients:</h3>: ''}
         {ingridients.map(i => <Ingridient key={`${i._id}${i.name}`} {...i} deleteIngridient={deleteIngridient}/>)}
        </div>
        <div> 
          {this.renderDishes()}
        </div>
     </div>
    )
  }
};

export default Dish;