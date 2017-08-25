import React, { Component } from 'react';
import Ingridient from './Ingridient';
import { Link } from 'react-router';
class Ingridients extends Component {
  
  componentWillMount() {
    this.props.loadIngridients()
  }
  render() {
    const {sortIngridients, deleteIngridient} = this.props;
    const {ascending, list} = this.props.ingridients;
    return (
      <div className="ingridient-grid">
        <div>
        <h3>Ingridients</h3>
        <button onClick={()=> sortIngridients(ascending)}>Sort</button>
        <Link  to="/ingridients/create">Create new Ingridient</Link>
        </div>
        { list.map(p => <Ingridient key={p && p._id} {...p} deleteIngridient={deleteIngridient}/>)}
      </div>
    )
  }
};

export default Ingridients;
