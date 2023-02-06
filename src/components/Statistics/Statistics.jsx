import { Title, SubTitle, TotalTitle } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <SubTitle>Good: {good}</SubTitle>
      <SubTitle>Neutral: {neutral}</SubTitle>
      <SubTitle>Bad: {bad}</SubTitle>
      <TotalTitle>Total: {total}</TotalTitle>
      <TotalTitle>Positive feedback: {positivePercentage}%</TotalTitle>
    </>
  );
};
