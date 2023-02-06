import React, { Component } from 'react';
// import { MdThumbUp, MdThumbsUpDown, MdThumbDown } from 'react-icons/md';
import { Box } from './Box';
// import { Button } from './Button/Button';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Box width="400px" mx="auto" p={4}>
        <Feedback />
        {/* <h1>Please leave feedback</h1>
        <Box
          width="350px"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          my={4}
        >
          <Button icon={MdThumbUp}>Good</Button>
          <Button icon={MdThumbsUpDown}>Neutral</Button>
          <Button icon={MdThumbDown}>Bad</Button>
        </Box> */}

        <h2>Statistics</h2>
      </Box>
    );
  }
}
