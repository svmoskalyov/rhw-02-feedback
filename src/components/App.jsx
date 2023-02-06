import React, { Component } from 'react';
import { Box } from './Box';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = event => {
    console.log('click on good');
    console.log(this);
    const { target } = event;
    console.log(target);
  };

  handleNeutral = () => {
    console.log('click on Neutral');
  };

  handleBad = () => {
    console.log('click on Bad');
  };

  render() {
    return (
      <Box width="400px" mx="auto" p={4}>
        <Feedback
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />

        <Statistics
          statGood={this.state.good}
          statNeutral={this.state.neutral}
          statBad={this.state.bad}
        />
      </Box>
    );
  }
}
