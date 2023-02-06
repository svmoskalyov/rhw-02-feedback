import { Title, SubTitle, TotalTitle } from './Statistics.styled';

export const Statistics = ({
  statGood,
  statNeutral,
  statBad,
  statTotal,
  statPercentage,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <SubTitle>Good: {statGood}</SubTitle>
      <SubTitle>Neutral: {statNeutral}</SubTitle>
      <SubTitle>Bad: {statBad}</SubTitle>
      <TotalTitle>Total: {statTotal}</TotalTitle>
      <TotalTitle>Positive feedback: {statPercentage}%</TotalTitle>
    </>
  );
};
