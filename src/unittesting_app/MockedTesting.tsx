import { useEffect, useState } from "react";

export const MockedTesting: React.FC = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("www.somewhereToBeMocked.com")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <ul>
      {list.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
