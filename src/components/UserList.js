import React from 'react';
import UserCard from './UserCard';
import './UserList.css';

export default function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p className="no-users">No users found.</p>;
  }

  return (
    <div className="user-list">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
