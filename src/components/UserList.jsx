import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json()) 
      .then((data) => setUsers(data.data)); 
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li>ID: {user.id}</li>
            <li>Name: {user.first_name} {user.last_name}</li>
            <li>Email: {user.email}</li>
            <li>
              <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
            </li>
          </ul>
          <UserCard
            id={user.id}
            email={user.email}
            firstname={user.first_name}
            lastname={user.last_name}
            avatar={user.avatar}
          />
        </div>
      ))}
    </div>
  );
}

export default UserList;
