import React, { Component } from 'react';
import './App.css';

import ReadSum from './ReadSum';
import SetSum from './SetSum';

class App extends Component {
  state = {
    loading: true,
    drizzleState: null
  }

  componentDidMount() {
    const { drizzle } = this.props

    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {    
    if (this.state.loading) return <h1>Loading Drizzle...</h1>;
    
    return(
      <div>
        <h1>Drizzle is ready!</h1>

        <ReadSum 
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />

        <SetSum 
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );
  }
}

export default App;
