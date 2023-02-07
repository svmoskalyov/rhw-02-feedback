import { Item, List, Total, Line } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total ? (
        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Line />
          <Total>Total: {total}</Total>
          <Total>Positive feedback: {positivePercentage}%</Total>
        </List>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
