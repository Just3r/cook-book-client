import React, { Component } from 'react';
import Dish from './Dish';
import { Link } from 'react-router';

class Dishes extends Component {
  componentWillMount() {
    this.props.loadDishes()
  }
  render() {
    const {sortDishes,deleteDish, deleteIngridient} = this.props;
    const {ascending, list} = this.props.dishes

    let dishesStyles = {
      display: "flex",
      flexDirection: "column",
      margin: "1em"
    }
    return (
      <div style={dishesStyles}>
        <div>
          <h3>Dishes</h3>
          <button onClick={()=> sortDishes(ascending)}>Sort</button>
          <Link  to="/dishes/create">Create new Dish</Link>
        </div>
        {list.map(p => <Dish key={p && p._id} {...p} deleteIngridient={deleteIngridient} deleteDish={deleteDish}/>)}
      </div>
    )
  }
};

export default Dishes;
