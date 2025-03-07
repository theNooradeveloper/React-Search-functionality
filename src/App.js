import "./styles.css";
import users from "./Data";
import { useState } from "react";
export default function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <h1>Data of Employees</h1>
      <table border={1} style={{ margin: "auto", marginTop: "3rem" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(query) ||
                user.role.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query)
            )
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
