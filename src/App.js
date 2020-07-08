import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import {connect} from 'react-redux';
import {incremented} from './redux/actions';

class App extends Component {
  /*state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
    ],
  };*/

  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id != id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.props.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.props.incremented}
            onDelete={this.handleDelete}
            counters={this.props.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  // console.log(state.counters);
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = { incremented }

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(App);
