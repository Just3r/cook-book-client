import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Plug from './components/Plug';
import { Provider } from 'react-redux';
import Dishes from './components/Dishes';
import store , { history } from './store';
import EditDish from './components/EditDish';
import CreateDish from './components/CreateDish';
import Ingridients from './components/Ingridients';
import EditIngridient from './components/EditIngridient';
import CreateIngridient from './components/CreateIngridient';
import { Router, Route, IndexRoute } from 'react-router';

const router = (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
        <Route  path="dishes" component={Dishes}></Route>
        <Route  path="ingridients" component={Ingridients}></Route>
        <IndexRoute component={Plug}></IndexRoute>
        <Route path="/dishes/create" component={CreateDish}></Route>
        <Route path="/dishes/show/:id" component={EditDish}></Route>
        <Route path="/ingridients/create" component={CreateIngridient}></Route>
        <Route path="/ingridients/show/:id" component={EditIngridient}></Route>
</Route>


    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

