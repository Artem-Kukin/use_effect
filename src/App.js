import "./App.css";
import List from "./components/List";
import Details from "./components/Details";
import { useEffect, useState } from "react";
let url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";

function App() {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState();

  useEffect(() => {
    openUsers();
  });

  const openUsers = async (id) => {
    if (users.length <= 0) {
      const response = await fetch(url + "users.json");
      if (!response.ok) {
        throw new Error(`Не правильный статус ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    }
    if (id) {
      setActive(id);
    }
  };
  return (
    <div className="App">
      <List users={users} expand={openUsers} />
      <Details url={url} id={active} />
    </div>
  );
}

export default App;
