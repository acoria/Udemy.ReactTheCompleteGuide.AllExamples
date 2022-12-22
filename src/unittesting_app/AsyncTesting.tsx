import { useEffect, useState } from "react";

export const AsyncTesting: React.FC = () => {
  const [fetchedList, setFetchedList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setFetchedList(data));
  }, []);

  return (
    <ul>
      {fetchedList.map((element: any) => (
        <li key={element.id}>{element.title}</li>
      ))}
    </ul>
  );
};
