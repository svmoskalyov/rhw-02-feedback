import { MdThumbUp, MdThumbsUpDown, MdThumbDown } from 'react-icons/md';
import { Box } from '../Box';
import { Button } from '../Button/Button';
import { Title } from './Feedback.styled';

export const Feedback = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <Box
        width="350px"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        my={4}
      >
        <Button icon={MdThumbUp} click={onGood}>
          Good
        </Button>
        <Button icon={MdThumbsUpDown} click={onNeutral}>
          Neutral
        </Button>
        <Button icon={MdThumbDown} click={onBad}>
          Bad
        </Button>
      </Box>
    </>
  );
};
