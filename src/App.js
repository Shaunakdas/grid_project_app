import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Grid  from './Grid';
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
  <Provider store={configureStore}>
    <Grid />
  </Provider>
);
export default App;
