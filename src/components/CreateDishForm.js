import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
class CreateDishForm extends Component {
  render() {
    const { formHandler, updatedForm, ingridients, dishParent } = this.props;
    return (
      <form onSubmit={(e)=> {
        e.preventDefault()
        let name = updatedForm.values["name"] || 'defaultName'
        let ingridients = Object.keys(updatedForm.values).filter(e => e !== 'name')
        let _id = updatedForm.values._id
        let data = { name, ingridients,dishParent}
        if(_id)  data = {...data, _id }
        formHandler(data)
      }}>
        <div>
          <label htmlFor="name"> Name</label>
          <Field name="name" component="input" type="text" />
          <div>
            {(ingridients || []).map(item => <label key={item._id}><Field  placeholder={item.name} key={item._id} name={item._id} component="input" type="checkbox" />{item.name}</label>)}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

CreateDishForm = reduxForm({
  form: 'createDishForm', 
  enableReinitialize: true
})(CreateDishForm);

CreateDishForm = connect(
  state => ({
    updatedForm: state.form.createDishForm
  })        
)(CreateDishForm)

export default CreateDishForm;
