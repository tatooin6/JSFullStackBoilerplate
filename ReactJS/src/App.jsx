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
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitNewUser = async () => {
    const url = 'http://localhost:3000/users';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: userName, email})
      });
      console.log(response);
    } catch (err) {
      console.error('Unexpected error: ', err);
    }
  }

  return (
    <>
      <h1>APISIX - pruebas</h1>
      <div className="card">
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <br/>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleSubmitNewUser}></button>
        </div> 
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
