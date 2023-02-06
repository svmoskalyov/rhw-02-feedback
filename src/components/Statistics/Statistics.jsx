import { Title, SubTitle } from './Statistics.styled';

export const Statistics = ({ statGood, statNeutral, statBad }) => {
  return (
    <>
      <Title>Statistics</Title>
      <SubTitle>Good: {statGood}</SubTitle>
      <SubTitle>Neutral: {statNeutral}</SubTitle>
      <SubTitle>Bad: {statBad}</SubTitle>
    </>
  );
};
