import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    };
    getUsers();
  }, []);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])

  return (
    <>
      <h1>APISIX - pruebas</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {
            users.map((user, index) => (
              <li key={index}>{user.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
