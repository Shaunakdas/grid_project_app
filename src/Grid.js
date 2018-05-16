import React, { Component } from 'react';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { displayArray } from './common/helper';
import {
  loadMore,
} from './actions/button';
class Grid extends Component {
  static propTypes = {
    loadMore: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props); 
    this.state = {
      startArray: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
      ],
      iterationCount: 0
    }
  }

  loadButton = (e) => {
    e.preventDefault();
    console.log("button");
    const { loadMore } = this.props;
    loadMore();
  }
  render() {
    const displayArr = displayArray(this.state.startArray, this.state.iterationCount);
    return (
      <div class="grid">
        {displayArr.map((value, index) => (
            <div class="cell">{value}</div>
          ))}
        <div class="cell"><button 
              onClick={this.loadButton}>Load More</button></div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   loadMore: () => dispatch(loadMore()),
// });

// export default connect( mapDispatchToProps)(Grid);
export default Grid;
