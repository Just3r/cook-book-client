import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
class EditDishForm extends Component {
  render() {
    const { formHandler, updatedForm, ingridients} = this.props;
    return (
      <form onSubmit={(e)=> {
        e.preventDefault()
        let filterFields = ["_id", "createdAt", "updatedAt", "ingridients", "name"]
        let name = updatedForm.values["name"] || 'defaultName'
        let ingridients = Object.keys(updatedForm.values).filter( e => !filterFields.includes(e))
        let _id = updatedForm.values._id
        formHandler({_id, name, ingridients})
      }}>
        <div>
          <label htmlFor="name"> Name</label>
          <Field name="name" component="input" type="text" />
          <div>
            {(ingridients || []).map(item => <label key={item._id}><Field  placeholder={item.name} key={item._id} name={item._id} component="input" type="checkbox"  />{item.name}</label>)}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

EditDishForm = reduxForm({
  form: 'EditDishForm', 
  enableReinitialize: true
})(EditDishForm);

EditDishForm = connect(
  state => ({
    initialValues: state.dishes.selected,
    updatedForm: state.form.EditDishForm
  })        
)(EditDishForm)

export default EditDishForm;
