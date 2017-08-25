import React, { Component } from 'react';
import IngridientForm from './IngridientForm'
class EditIngridient extends Component {
  componentWillMount() {
    this.props.showIngridient(this.props.params.id)
  }
  render() {
    const { editIngridient } = this.props
    return (
      <div>
        <IngridientForm formHandler={editIngridient}/> 
     </div>
    )
  }
};

export default EditIngridient;
