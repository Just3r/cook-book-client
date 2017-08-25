import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class IngridientForm extends Component {
  render() {
    const { formHandler, updatedForm } = this.props;
    return (
      <form onSubmit={(e)=> {
        e.preventDefault()
        formHandler(updatedForm.values)
       }}>
        <div>
          <label htmlFor="name"> Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <Field name="calories" component="input" type="number"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

IngridientForm = reduxForm({
  form: 'ingridientForm', 
  enableReinitialize: true
})(IngridientForm);

IngridientForm = connect(
  state => ({
    initialValues: state.ingridients.selected,
    updatedForm: state.form.ingridientForm
  })        
)(IngridientForm)

export default IngridientForm;