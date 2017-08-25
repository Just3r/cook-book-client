import React, { Component } from 'react';
import IngridientForm from './IngridientForm'
class CreateIngridient extends Component {
  render() {
    const { createIngridient } = this.props
    return (
      <div>
        <IngridientForm formHandler={createIngridient}/> 
     </div>
    )
  }
};

export default CreateIngridient;
