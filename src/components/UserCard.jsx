import React from 'react';

function UserCard({ id, firstname, lastname, email }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', margin: '12px 0', borderRadius: '8px' }}>
      <h3>{firstname} {lastname}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserCard;
