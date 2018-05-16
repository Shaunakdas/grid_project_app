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
    startArray: PropTypes.array.isRequired,
    iterationCount: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props); 
  }

  loadButton = (e) => {
    e.preventDefault();
    console.log("button");
    const { loadMore } = this.props;
    loadMore();
  }
  render() {
    const displayArr = displayArray(this.props.startArray, this.props.iterationCount);
    return (
      <div className="grid">
        {displayArr.map((value, index) => (
            <div className="cell">{value}</div>
          ))}
        <div className="cell">
          <button className="button"
              onClick={this.loadButton}>
              Load More
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ 
  startArray: state.startArray,
  iterationCount: state.iterationCount
 });
const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(loadMore()),
});

export default connect( mapStateToProps,mapDispatchToProps)(Grid);
