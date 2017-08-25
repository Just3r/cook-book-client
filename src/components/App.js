import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    dishes: {
      list:state.dishes.list,
      selected: state.dishes.selected,
      error:state.dishes.error,
      ascending:state.dishes.ascending
    },
    ingridients: {
      list:state.ingridients.list,
      selected: state.ingridients.selected,
      error:state.ingridients.error,
      ascending:state.ingridients.ascending
    }
  }
}

const mapDispachToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
