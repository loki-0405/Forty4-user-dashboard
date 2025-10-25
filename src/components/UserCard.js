import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

export default function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="avatar-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="User Avatar"
          className="user-avatar"
        />
      </div>

      <h3 className="user-name">{user.name}</h3>

      <div className="user-meta">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
      </div>

      <Link to={`/users/${user.id}`} className="details-link">
        View Details →
      </Link>
    </article>
  );
}
