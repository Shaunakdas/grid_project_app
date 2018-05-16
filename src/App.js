import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './reducers/appState';
import Grid  from './Grid';

const store = createStore(
	AppReducer
);
// import './App.css';

// class App extends Component {

//   state = {
//     char_list: [
//       'a',
//       'b',
//       'c',
//       'd',
//       'e',
//       'f'
//     ],
//   }
//   render() {
//     return (
//       <Grid />
//     );
//   }
// }
const App = () => (
  <Provider store={store}>
    <Grid />
  </Provider>
);
export default App;
