export const Statistics = ({ statGood, statNeutral, statBad }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {statGood}</p>
      <p>Neutral: {statNeutral}</p>
      <p>Bad: {statBad}</p>
    </>
  );
};
