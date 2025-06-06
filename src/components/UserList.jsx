import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error('Fetch failed:', err.message);
        setError(err.message);
        setUsers([]);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {/* Show error if any */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Show users if available */}
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <ul>
              <li>ID: {user.id}</li>
              <li>Name: {user.name}</li>
              <li>Email: {user.email}</li>
            </ul>

            <UserCard
              id={user.id}
              email={user.email}
              firstname={user.name.split(' ')[0]} // first name guess
              lastname={user.name.split(' ')[1] || ''}
              avatar={null}
            />
          </div>
        ))
      ) : !error ? (
        <p>Loading users...</p>
      ) : null}
    </div>
  );
}

export default UserList;
