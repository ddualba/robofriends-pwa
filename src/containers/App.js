import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions/actions';
import MainPage from '../components/MainPage';

import './App.css';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.reqRobots.robots,
  isPending: state.reqRobots.isPending,
  error: state.reqRobots.error
});

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
