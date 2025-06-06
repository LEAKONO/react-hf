// UserCard.js
import React from 'react';

function UserCard({ id, firstname, lastname, email, avatar }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: '#f0f0f0',
        maxWidth: '350px'
      }}
    >
      <h3>
        Name: {firstname} {lastname}
      </h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Email:</strong> {email}</p>
       <img src={avatar} alt="User avatar" /> 
    </div>
  );
}

export default UserCard;
