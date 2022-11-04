export const Playground: React.FC = () => {
  const sorted = [10, 3, 6, 7, 2].sort((a, b) => {
    if (a === 10) {
      return -1;
    } else if (b === 10) {
      return 1;
    } else {
      return a - b;
    }
  });

  return (
    <>
      {sorted.map((value) => (
        <h1>{value}</h1>
      ))}
    </>
  );
};
