import { MdThumbUp, MdThumbsUpDown, MdThumbDown } from 'react-icons/md';
import { Box } from './Box';
import { Button } from './Button/Button';

export const Feedback = () => {
  return (
    <>
      <h1>Please leave feedback</h1>
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
      </Box>
    </>
  );
};
