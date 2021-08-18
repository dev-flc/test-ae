import React from 'react';
import { Provider } from 'react-redux';
import { render }   from 'react-dom';

import store from './store/';
import Home  from 'Modules/home'

const APP = document.getElementById('app');

render( <Provider store = { store } > <Home/> </Provider>, APP );
