import React, { Component } from 'react';
import EditDishForm from './EditDishForm';
class EditDish extends Component {
  componentWillMount() {
    this.props.showDish(this.props.params.id)
    this.props.loadIngridients()
  }
  render() {
    const {editDish, ingridients} = this.props;
    let styles = {
      display: "flex",
      flexDirection: "column",
      margin: "1em",
      padding: "1em",
      border: "1px solid black"
    }

    return (
      <div style={styles}>
      <EditDishForm formHandler={editDish} ingridients={ingridients.list}/> 
     </div>
    )
  }
};

export default EditDish;
